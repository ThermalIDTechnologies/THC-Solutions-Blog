import React from "react"
import Image from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import sanityConfig from './../../sanity/config';

const Figure = ({ node }) => {
  const fluid = getFluidGatsbyImage(
    node.asset._id,
    { maxWidth: 846 },
    sanityConfig
  )

  // only use Gatsby images for JPG/PNG images
  const image = node.asset.extension.match(/(jpe?g|png)/) ? (
    <Image fluid={fluid} alt={node.alt} />
  ) : (
    <img src={node.asset.url} alt={node.alt} />
  )

  return (
    <figure>
      {image}
      {node.caption && (
        <figcaption dangerouslySetInnerHTML={{ __html: node.caption }} />
      )}
    </figure>
  )
}

export default Figure