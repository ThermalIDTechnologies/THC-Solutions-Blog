import styled from "styled-components"
import Image from "gatsby-image"

export const StyledBlogPostPreview = styled.div`
  margin-bottom: 4rem;

  a {
    color: #404041;
    text-decoration: none;

    h2 {
      margin-top: 2rem;
      margin-bottom: 0.5rem;
    }

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`

export const StyledPreviewImage = styled.div`
  max-width: 600px;
  /* margin: 0 auto; */
`