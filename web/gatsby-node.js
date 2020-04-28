/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const _ = require("lodash")

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
        totalCount
        edges {
          node {
            id
            categories {
              title
            }
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  // const categorySet = new Set()
  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node
    const path = `/${slug.current}/`

    // if (edge.node.categories[0]) {
    //   edge.node.categories.forEach(cat => {
    //     categorySet.add(cat.title)
    //   })
    // }

    reporter.info(`Creating blog post page: ${path}`)
    // reporter.info(categorySet)

    createPage({
      path,
      component: require.resolve("./src/templates/blog-post.js"),
      context: { id },
    })
  })

  // const { totalCount } = result.data.allSanityPost
  // const pages = Math.ceil(totalCount / 10)

  // const categoryList = Array.from(categorySet, { length: pages })

  // categoryList.forEach((category, underScore, i) => {
  //   console.log(i)
  //   createPage({
  //     path:
  //       i === 0
  //         ? `/${_.kebabCase(category)}/`
  //         : `/${_.kebabCase(category)}/${i + 1}`,
  //     component: require.resolve("./src/templates/categories.js"),
  //     context: {
  //       skip: i * 10,
  //       currentPage: i + 1,
  //       category,
  //     },
  //   })
  // })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter)
  await paginateBlogPosts(graphql, actions, reporter)
}
