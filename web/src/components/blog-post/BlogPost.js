import React from "react"
import { format, distanceInWords, differenceInDays } from "date-fns"
import {
  Wrapper,
  H1Wrapper,
  IntroContainer,
  BodyContainer,
  ButtonWrapper,
  QuoteContainer,
  LeftQuotationMark,
  QuoteContent,
  RightQuotationMark,
  SourcesContainer,
} from "../styles/StyledBlogPost"
import BlockContent from "../block-content"
import Product from "../Product"
import Button from "../Button"
import SEO from "../seo"

const BlogPost = ({ post }) => {
  const {
    publishedAt,
    categories,
    title,
    introduction,
    _rawBody,
    products,
    ctaSection,
    quoteSection,
    sources,
  } = post
  console.log(post)

  return (
    <>
      <SEO title={title} description={introduction} />
      <H1Wrapper>
        <h1>{title}</h1>
        {publishedAt && (
          <h5>
            Posted on: {differenceInDays(new Date(publishedAt), new Date()) > 3
              ? distanceInWords(new Date(publishedAt), new Date())
              : format(new Date(publishedAt), "MMMM DD YYYY")}
          </h5>
        )}
        <h5>
        Posted in: {categories.map(category => {
          return <span key={category._id}>{category.title}</span>
        })}
        </h5>
      </H1Wrapper>
      <IntroContainer mBtm={0}>
        <Wrapper>
          <h4>{introduction}</h4>
        </Wrapper>
      </IntroContainer>
      <BodyContainer>
        <Wrapper>{_rawBody && <BlockContent blocks={_rawBody} />}</Wrapper>
      </BodyContainer>
      {products.map(product => {
        return <Product key={product.id} product={product} />
      })}
      {ctaSection && (
        <IntroContainer>
          <Wrapper>
            <h4>{ctaSection.ctaDescription}</h4>
            <ButtonWrapper>
              <Button
                bgColor={"#4B7838"}
                fontColor={"#FFF"}
                link={ctaSection.ctaButtonUrl}
              >
                {ctaSection.ctaButtonText}
              </Button>
            </ButtonWrapper>
          </Wrapper>
        </IntroContainer>
      )}
      {quoteSection && (
        <Wrapper>
          <QuoteContainer>
            <LeftQuotationMark>
              <img
                src="https://res.cloudinary.com/crjars/image/upload/c_scale,f_auto,q_auto:best,w_100/v1585077397/left-quotation.svg"
                alt="left quotation marks"
              />
            </LeftQuotationMark>
            <QuoteContent>
              <blockquote>{quoteSection.quoteText}</blockquote>
              <p>{quoteSection.quoteAuthor}</p>
            </QuoteContent>
            <RightQuotationMark>
              <img
                src="https://res.cloudinary.com/crjars/image/upload/c_scale,f_auto,q_auto:best,w_100/v1585077419/right-quotation.svg"
                alt="right quotation marks"
              />
            </RightQuotationMark>
          </QuoteContainer>
        </Wrapper>
      )}
      <SourcesContainer>
        {sources.length > 0 && <h2>SOURCES</h2>}
        {sources.map(source => {
          return (
            <Wrapper>
              <p key={source._key}>
                <a href={source.sourceUrl}>
                  {source.authorAndSource}
                  <br />
                  <span>{source.sourceUrl}</span>
                </a>
              </p>
            </Wrapper>
          )
        })}
      </SourcesContainer>
    </>
  )
}

export default BlogPost
