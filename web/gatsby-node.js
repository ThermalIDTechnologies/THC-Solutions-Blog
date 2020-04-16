/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function paginateBlogPosts(graphql, actions, reporter) {
  const { createPage } = actions
  const { errors, data } = await graphql(`
    {
      allSanityPost(sort: { fields: [publishedAt], order: DESC }) {
        totalCount
      }
    }
  `)

  if (errors) throw errors

  const { totalCount } = data.allSanityPost
  const pages = Math.ceil(totalCount / 10)

  Array.from({ length: pages }).forEach((_, i) => {
    const path = `/${i + 1}/`

    reporter.info(`Creating blog pagination page: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/pages/index.js"),
      context: {
        skip: i * 10,
        currentPage: i + 1,
      },
    })
  })
}

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node
    const path = `/${slug.current}/`

    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/templates/blog-post.js"),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter)
  await paginateBlogPosts(graphql, actions, reporter)
}
