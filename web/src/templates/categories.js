import React from "react"
import { graphql } from "gatsby"
import { mapEdgesToNodes } from "../lib/helpers"
import GraphQLErrorList from "../components/graphqlErrorList"
import { H1Wrapper, Wrapper } from "../components/styles/StyledBlogPost"
import {
  BlogPostIndexContainer,
  BlogPostPreviewContainer,
  IgWrapper,
} from "../components/styles/StyledBlogPostPreview"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPostPreview from "../components/BlogPostPreview"
import Pagination from "./../components/Pagination"
import Instagram from "./../components/Instagram"

export const query = graphql`
  query CategoryQuery($skip: Int!, $category: String) {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: {categories: {elemMatch: {title: {in: [$category]}}}}
      limit: 10
      skip: $skip
    ) {
      totalCount
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
          categories {
            title
          }
          slug {
            current
          }
          introduction
        }
      }
    }
  }
`

const IndexPage = props => {
  const { data, errors, pageContext } = props

  console.log(pageContext)
  console.log(data)

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
      <SEO title={pageContext.category} />
      <H1Wrapper>
        <h1>{pageContext.category}</h1>
      </H1Wrapper>
      <Wrapper>
        <Pagination
          currentPage={pageContext.currentPage}
          totalCount={data.posts.totalCount}
        />
        <BlogPostIndexContainer>
          <BlogPostPreviewContainer>
            {postNodes.map(postNode => {
              return <BlogPostPreview key={postNode.id} nodes={postNode} />
            })}
          </BlogPostPreviewContainer>
          <IgWrapper>
            <Instagram />
          </IgWrapper>
        </BlogPostIndexContainer>
        <Pagination
          currentPage={pageContext.currentPage}
          totalCount={data.posts.totalCount}
        />
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
