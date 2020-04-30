import React from "react"
import { graphql } from "gatsby"
import { mapEdgesToNodes } from "../lib/helpers"
import GraphQLErrorList from "../components/graphqlErrorList"
import { H1Wrapper, Wrapper } from "../components/styles/StyledBlogPost"
import {
  BlogPostIndexContainer,
  BlogPostPreviewContainer,
  AsideWrapper,
  PaginationWrapper,
} from "../components/styles/StyledBlogPostPreview"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPostPreview from "../components/BlogPostPreview"
import Pagination from "./../components/Pagination"
import Instagram from "./../components/Instagram"
import LatestPosts from "./../components/LatestPosts"

export const query = graphql`
  query BlogPageQuery($skip: Int! = 0) {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
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
      <SEO title="THC Solutions" />
      <H1Wrapper>
        <h1>THC Solutions Blog</h1>
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
          <AsideWrapper>
            <LatestPosts />
            <Instagram />
          </AsideWrapper>
          <PaginationWrapper>
            <Pagination
              currentPage={pageContext.currentPage}
              totalCount={data.posts.totalCount}
            />
          </PaginationWrapper>
        </BlogPostIndexContainer>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
