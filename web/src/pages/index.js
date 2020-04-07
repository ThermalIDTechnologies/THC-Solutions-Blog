import React from "react"
import { graphql } from "gatsby"
import { mapEdgesToNodes } from "../lib/helpers"
import GraphQLErrorList from "../components/graphqlErrorList"
import { H1Wrapper, Wrapper } from "../components/styles/StyledBlogPost"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BlogPostPreview from "../components/BlogPostPreview"

export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(
      limit: 12
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          publishedAt
          blogIndexImage {
            asset {
              fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
              }
            }
            alt
          }
          title
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  console.log(postNodes)

  return (
    <Layout>
      <SEO title="Blog" />
      <H1Wrapper>
        <h1>Blog</h1>
      </H1Wrapper>
      <Wrapper>
        {postNodes.map(postNode => {
          return <BlogPostPreview key={postNode.id} nodes={postNode} />
        })}
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
