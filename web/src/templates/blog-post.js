import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/blog-post/blogPostLayout"
import GraphQLErrorList from "../components/graphqlErrorList"
import BlogPost from "../components/blog-post/BlogPost"

const fourTwentyBlog = props => {
  const { data, errors } = props
  const post = data && data.sanityPost

  console.log(post)
  return (
    <Layout BlogTitle={post.title}>
      {errors && <GraphQLErrorList errors={errors} />}

      {post && <BlogPost post={post} />}
    </Layout>
  )
}

export default fourTwentyBlog

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      title
      introduction
      _rawBody(resolveReferences: { maxDepth: 5 })
      products {
        _rawProductInfo
        buttonText
        buttonUrl
        bgColor {
          rgb {
            r
            g
            b
            a
          }
        }
        productImage {
          asset {
            fluid(maxWidth: 768) {
              ...GatsbySanityImageFluid
            }
          }
        }
        title
        id
      }
      ctaSection {
        ctaButtonText
        ctaButtonUrl
        ctaDescription
      }
      quoteSection {
        quoteAuthor
        quoteText
      }
      sources {
        authorAndSource
        sourceUrl
        _key
      }
    }
  }
`
