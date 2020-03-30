import React from "react"
import { Btn } from "./styles/StyledButton"
import { motion } from "framer-motion"

const Button = ({ bgColor, fontColor, link, children }) => {
  return (
    <Btn
      as={motion.a}
      href={link}
      bgColor={bgColor}
      fontColor={fontColor}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", damping: 300 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { type: "spring", damping: 300 },
      }}
    >
      <em>{children}</em>
    </Btn>
  )
}

export default Button
