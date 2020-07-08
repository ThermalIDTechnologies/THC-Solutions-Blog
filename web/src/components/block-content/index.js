import BaseBlockContent from "@sanity/block-content-to-react"
import React from "react"
import Figure from "./Figure"
import SmallFigure from "./SmallFigure"
import MediumFigure from "./MediumFigure"
import sanityConfig from "./../../sanity/config"

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case "h1":
          return <h1>{props.children}</h1>

        case "h2":
          return <h2>{props.children}</h2>

        case "h3":
          return <h3>{props.children}</h3>

        case "h4":
          return <h4>{props.children}</h4>

        case "h5":
          return <h5>{props.children}</h5>

        case "h6":
          return <h6>{props.children}</h6>

        case "blockquote":
          return <blockquote>{props.children}</blockquote>

        case "indentedText":
          return <p style={{ textIndent: `1.5rem` }}>{props.children}</p>

        case "standaloneList":
          return <p style={{ paddingLeft: `1.5rem` }}>{props.children}</p>

        case "nestedStandaloneList":
          return <p style={{ paddingLeft: `3rem` }}>{props.children}</p>

        default:
          return <p>{props.children}</p>
      }
    },
    figure: Figure,
    smallFigure: SmallFigure,
    mediumFigure: MediumFigure,
  },
}

const BlockContent = ({ blocks }) => (
  <BaseBlockContent
    blocks={blocks}
    serializers={serializers}
    {...sanityConfig}
  />
)

export default BlockContent
