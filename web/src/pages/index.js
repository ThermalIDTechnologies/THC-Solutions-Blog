import React from "react"
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'
import { H1Wrapper,  Wrapper } from "../components/styles/StyledBlogPost"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          blogIndexImage {
            asset {
              fluid(maxWidth: 768) {
              ...GatsbySanityImageFluid
              }
            }
          }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
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

  return (
  <Layout>
    <SEO title="Blog" />
    <H1Wrapper>
      <h1>Blog</h1>
    </H1Wrapper>
    <Wrapper>

    </Wrapper>
  </Layout>
)}

export default IndexPage
