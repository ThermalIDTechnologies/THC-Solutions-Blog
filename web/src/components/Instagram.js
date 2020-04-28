import React from "react"
import useInstagram from "../hooks/useInstagram"
import { InstaContainer } from "./styles/StyledBlogPostPreview"

const Instagram = () => {
  const instas = useInstagram()
  return (
    <div>
      <h4>Latest IG Posts:</h4>
      <InstaContainer>
        {instas.map(ig => (
          <a href={ig.url} key={ig.id}>
            <img
              src={`https://images.weserv.nl/?url=${encodeURIComponent(
                ig.thumbnail
              )}&w=230`}
              alt={ig.caption}
            />
          </a>
        ))}
      </InstaContainer>
    </div>
  )
}

export default Instagram
