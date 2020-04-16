import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PaginationStyles = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  text-align: center;
  margin: 1rem 0 3rem;
  justify-items: center;
  align-items: center;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
  & > * {
    display: inline;
    text-decoration: none;
    &:nth-child(odd) {
      background-color: #4b7838;
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
    }
    &:nth-child(even) {
      color: #404041;
      margin: 0;
    }
  }

  a[disabled] {
    opacity: 0;
    pointer-events: none;
    /* text-decoration: line-through; */
  }
`

const Pagination = ({ currentPage = 1, totalCount }) => {
  const totalPages = Math.ceil(totalCount / 10)
  const nextPage = currentPage + 1
  const prevPage = currentPage - 1

  return (
    <PaginationStyles>
      <Link
        disabled={prevPage <= 0 ? true : null}
        to={`${prevPage}`}
      >
        <em>← Prev 10</em>
      </Link>
      <p>
        Page {currentPage} of {totalPages}
      </p>
      <Link
        disabled={nextPage > totalPages ? true : null}
        to={nextPage > totalPages ? null : `${nextPage}`}
      >
        <em>{nextPage > totalPages ? `No more pages` : `10 More →`}</em>
      </Link>
    </PaginationStyles>
  )
}

export default Pagination
