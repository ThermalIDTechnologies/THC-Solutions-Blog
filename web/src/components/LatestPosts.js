import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { mapEdgesToNodes } from "../lib/helpers"
import { LatestPostLink } from "./styles/StyledBlogPostPreview"

const LatestPosts = () => {
  const data = useStaticQuery(graphql`
    query LatestPostsQuery {
      posts: allSanityPost(
        sort: { fields: publishedAt, order: DESC }
        limit: 6
      ) {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <div>
      <h4>Latest Blogs:</h4>
      {postNodes.map(latestPost => {
        return (
          <LatestPostLink key={latestPost.id} to={`/${latestPost.slug.current}`}>
            <h6>{latestPost.title}</h6>
          </LatestPostLink>
        )
      })}
    </div>
  )
}

export default LatestPosts
