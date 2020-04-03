import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../blogHeader"
import { LayoutContainer } from "../styles/StyledBlogPost"

const Layout = ({ children, BlogTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleForBLogQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} BlogTitle={BlogTitle} style={{ marginBottom: `0`, }} />
      <LayoutContainer>
        <main>{children}</main>
        <footer style={{ textAlign: `center`, marginTop: `1rem` }}>
          <small>© {new Date().getFullYear()}, THC Label Solutions. All Rights Reserved.</small>
        </footer>
      </LayoutContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
