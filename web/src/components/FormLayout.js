import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"

import Header from "./header"
import "./layout.css"
import StyledBackgroundSection from "./BackgroundImage"
import { Grommet, Anchor, Box, Text } from "grommet"

const myTheme = {
  global: {
    colors: {
      brand: "#497638",
    },
    focus: {
      border: {
        color: "#FCD199",
      },
    },
  },
}

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 250, 245, 0.8);
  padding-top: 100px;
  margin: 0;

  @media screen and (min-width: 768px) {
    height: 100vh;
    padding-top: 50px;
  }
`

const FormLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleForFormQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const easing = [0.6, -0.05, 0.01, 0.99]

  return (
    <Grommet style={{ height: `100vh` }} theme={myTheme}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          exit={{ opacity: 0 }}
          initial="initial"
          animate="animate"
        >
          <StyledBackgroundSection filename="Dope-background-image.webp">
            <Header siteTitle={data.site.siteMetadata.title} />
            <MainWrapper>
              <main
                style={{
                  margin: `0 auto`,
                  maxWidth: 960,
                  padding: `1.45rem 1.0875rem 0`,
                }}
              >
                {children}
              </main>
              <Box
                style={{ backgroundColor: `transparent` }}
                direction="column"
                justify="center"
                pad="small"
              >
                <Text textAlign="center" size="small">
                  <Anchor href="tel:8008424773">800-842-4773</Anchor>
                </Text>
                <Text textAlign="center" size="small">
                  <Anchor href="mailto:sales@thclabelsolutions.com">
                    sales@thclabelsolutions.com
                  </Anchor>
                </Text>
                <Text textAlign="center" size="small">
                  © {new Date().getFullYear()} THC Label Solutions
                </Text>
              </Box>
            </MainWrapper>
          </StyledBackgroundSection>
        </motion.div>
      </AnimatePresence>
    </Grommet>
  )
}

FormLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FormLayout
