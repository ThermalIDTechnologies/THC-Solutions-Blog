import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../blogHeader"

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} style={{ marginBottom: `0`, }} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <footer style={{ textAlign: `center`, marginTop: `1rem` }}>
          <small>© {new Date().getFullYear()}, THC Label Solutions. All Rights Reserved.</small>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
