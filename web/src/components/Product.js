import React from "react"
import {
  ProductContainer,
  Wrapper,
  ButtonWrapper,
  ImageContainer,
  ProductContentContainer,
} from "./styles/StyledBlogPost"
import Image from "gatsby-image"
import BlockContent from "./block-content"
import Button from "./Button"

const Product = ({ product }) => {
  console.log(product)
  const rgba = product.bgColor.rgb
  return (
    <ProductContainer
      bgColor={`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`}
    >
      <Wrapper>
        <ImageContainer>
          <Image fluid={product.productImage.asset.fluid} alt={product.title} />
        </ImageContainer>
        <ProductContentContainer>
          <h2>{product.title}</h2>
          {product._rawProductInfo && (
            <BlockContent blocks={product._rawProductInfo} />
          )}
          <ButtonWrapper>
            <Button
              bgColor={"#414042"}
              fontColor={"#FFF"}
              link={product.buttonUrl}
            >
              {product.buttonText}
            </Button>
          </ButtonWrapper>
        </ProductContentContainer>
      </Wrapper>
    </ProductContainer>
  )
}

export default Product
