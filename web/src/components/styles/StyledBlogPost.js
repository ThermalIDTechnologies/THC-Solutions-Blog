import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  h2 {
    /* text-align: center; */
    /* font-size: 25px; */
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1.75px;
  }
`

export const H1Wrapper = styled.div`
  background-color: rgba(73, 118, 56, 0.25);
  width: 100%;

  h1 {
    color: #404041;
    text-align: center;
    padding: 6rem 3rem 2rem;
    margin: 0;
    font-size: 2.75rem;
    font-weight: 700;
  }
`

export const IntroContainer = styled.div(
  props => css`
    background-color: #404041;
    width: 100%;

    h4 {
      text-indent: 1.5rem;
      ${"" /* font-size: 1rem; */}
      color: #fff;
      font-weight: 600;
    }
  `
)

export const BodyContainer = styled.div`
  width: 100%;
  /* padding: 2rem; */
  color: #404041;

  h2 {
    text-align: center;
  }

  p {
    text-indent: 1.5rem;
  }

  figure {
    margin-right: 0;
    margin-left: 0;
  }

  @media screen and (min-width: 768px) {
    figure {
      margin-right: 2rem;
      margin-left: 2rem;
    }
  }
`

export const ProductContainer = styled.div(
  props => css`
    background-color: ${props.bgColor};
    color: #414042;

    p {
      em {
        font-weight: 500;
      }
    }

    ul,
    li {
      padding-left: 1rem;
    }

    @media screen and (min-width: 768px) {
      ${Wrapper} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1.5rem;
        align-items: center;
      }
    }
  `
)

export const ImageContainer = styled.div``

export const ProductContentContainer = styled.div``

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const QuoteContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const LeftQuotationMark = styled.div`
  max-width: 100px;
  img {
    width: 100%;
    height: auto;
  }
`

export const QuoteContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 0 0.7rem;
  color: #414042;
  font-weight: 500;

  blockquote {
    margin: 0;
  }

  p {
    align-self: flex-end;
    margin-top: 0.4rem;
    margin-bottom: 0;
  }

  @media screen and (min-width: 480px) {
    blockquote,
    p {
      font-size: 1.3rem;
    }
  }

  @media screen and (min-width: 824px) {
    blockquote,
    p {
      font-size: 1.7rem;
    }
  }
`

export const RightQuotationMark = styled.div`
  display: flex;
  align-items: flex-end;
  max-width: 100px;
  img {
    width: 100%;
    height: auto;
    margin-bottom: 0;
  }
`

export const SourcesContainer = styled.div`
  color: #414042;

  h2 {
    margin-top: 0;
    text-align: center;
  }

  a {
    color: #414042;
    text-decoration: none;
    span {
      word-break: break-all;
    }
  }
`
