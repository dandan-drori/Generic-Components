import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadeIn = keyframes`
  0% {
    transform: translateX(-100vw);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Logo = (props) => {
  return (
    <Container
      to="/"
      fontWeight={props?.logoFontWeight}
      fontSize={props?.logoFontSize}
      color={props?.logoColor}
    >
      {props?.logo || "Logo"}
    </Container>
  );
};

export default Logo;

const Container = styled(Link)`
  color: ${({ color }) => (color ? color : "#050505")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "700")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "2rem")};
  transform: translateX(-100vw);
  animation: ${fadeIn} 500ms forwards;
`;
