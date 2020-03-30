import styled, { css } from "styled-components"

export const Btn = styled.a(
  props => css`
    background-color: ${props.bgColor};
    color: ${props.fontColor};
    padding: 0.5rem 2rem;
    text-decoration: none;
    border-radius: 0.9rem;
    -webkit-box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.6);
    box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.6);
    font-weight: 500;
    ${'' /* margin: 0 auto; */}
  `
)
