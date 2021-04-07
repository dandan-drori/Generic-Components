import React from "react";
import styled, { css } from "styled-components";

const Button = (props) => {
  if (props.children) {
    return <Container variation={props.variation}>{props.children}</Container>;
  }

  return (
    <Container variation={props.variation}>{props.text || "default"}</Container>
  );
};

export default Button;

const Container = styled.button`
  padding: ${({ padding }) => (padding ? padding : "1rem 5rem")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "2rem")};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : "2rem")};
  color: ${({ color }) => (color ? color : "#eee")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "1px"};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.6rem")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "600")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "3px")};
  ${({ variation }) => css`
    background: ${variation === "outline" ? "none" : "var(--secondary-color)"};
    color: ${variation === "outline"
      ? "var(--secondary-color)"
      : "var(--primary-light)"};
    border: 1px solid
      ${variation === "outline"
        ? "var(--secondary-color)"
        : "var(--secondary-color)"};

    &:hover {
      background: ${variation === "outline"
        ? "var(--secondary-color)"
        : "none"};
      color: ${variation === "outline"
        ? "var(--primary-light)"
        : "var(--secondary-color)"};
    }
  `}
`;
