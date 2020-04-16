import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { format, distanceInWords, differenceInDays } from "date-fns"

import {
  StyledBlogPostPreview,
  StyledPreviewImage,
} from "./styles/StyledBlogPostPreview"

const BlogPostPreview = ({ nodes }) => {
  return (
    <StyledBlogPostPreview>
      <Link to={`/${nodes.slug.current}`}>
        {nodes.blogIndexImage && (
          <StyledPreviewImage>
            <Image fluid={nodes.blogIndexImage.asset.fluid} alt={nodes.title} />
          </StyledPreviewImage>
        )}
        <h2>{nodes.title}</h2>
        {nodes.publishedAt && (
          <small>
            Posted on:{" "}
            {differenceInDays(new Date(nodes.publishedAt), new Date()) > 3
              ? distanceInWords(new Date(nodes.publishedAt), new Date())
              : format(new Date(nodes.publishedAt), "MMMM DD YYYY")}
          </small>
        )}
        {nodes.introduction && <p>{nodes.introduction}</p>}
      </Link>
    </StyledBlogPostPreview>
  )
}

export default BlogPostPreview
