import styled from "styled-components"
import { Link } from "gatsby"

export const BlogPostIndexContainer = styled.div`
  display: grid;

  grid-template-areas:
    "content"
    "bottom"
    "side";

  grid-template-columns: 1fr;
  /* grid-template-rows: auto 1fr auto; */
  grid-gap: 2em;

  article:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    grid-template-areas:
      "content side"
      "bottom bottom";

    grid-template-columns: 1fr minmax(100px, 230px);
    /* grid-template-rows: auto 1fr auto; */
    grid-gap: 2em;
  }
`

export const BlogPostPreviewContainer = styled.div`
  grid-area: content;
`

export const StyledBlogPostPreview = styled.article`
  margin-bottom: 4rem;

  a {
    color: #404041;
    text-decoration: none;

    h2 {
      margin-top: 2rem;
      margin-bottom: 0.5rem;
    }

    h2:first-of-type {
      margin-top: 0;
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

export const ReadMoreLink = styled.div`
  background-color: #414042;
  color: #fff;
  padding: 0.5rem 0;
  text-decoration: none;
  text-align: center;
  border-radius: 0.9rem;
  -webkit-box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.6);
  font-weight: 500;
  width: 12.5rem;
`

export const StyledPreviewImage = styled.div`
  max-width: 600px;
  margin: 1rem 0;
`

export const AsideWrapper = styled.aside`
  grid-area: side;

  h4 {
    text-transform: uppercase;
  }
`

export const LatestPostLink = styled(Link)`
  color: #404041;
  text-decoration-line: underline;
  text-decoration-color: #4b7838;
`

export const InstaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`

export const PaginationWrapper = styled.div`
  grid-area: bottom;
`
