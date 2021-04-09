import React from "react";
import styled, { css } from "styled-components";

const Hamburger = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <Container onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <Line isMenuOpen={isMenuOpen}></Line>
    </Container>
  );
};

export default Hamburger;

const Container = styled.div`
  padding: ${({ padding }) => (padding ? padding : "2rem")};
  z-index: 2;
`;

const Line = styled.div`
  height: ${({ height }) => (height ? height : "0.4rem")};
  width: ${({ width }) => (width ? width : "3rem")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#050505")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "1.5rem"};
  transition: ${({ transition }) =>
    transition ? transition : "all 0.3s ease-in-out"};

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      transform: translateX(50px);
      background: transparent;
    `}

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: ${({ width }) => (width ? width : "4rem")};
    height: ${({ height }) => (height ? height : "0.4rem")};
    border-radius: ${({ borderRadius }) =>
      borderRadius ? borderRadius : "1.5rem"};
    transition: ${({ transition }) =>
      transition ? transition : "all 0.3s ease-in-out"};
    background-color: ${({ bgColor }) => (bgColor ? bgColor : "#050505")};
  }

  &::before {
    ${({ isMenuOpen }) =>
      isMenuOpen
        ? css`
            transform: rotate(45deg) translate(-35px, 35px);
          `
        : css`
            transform: translateY(1.2rem);
          `}
  }

  &::after {
    ${({ isMenuOpen }) =>
      isMenuOpen
        ? css`
            transform: rotate(-45deg) translate(-35px, -35px);
          `
        : css`
            transform: translateY(-1.2rem);
          `}
  }
`;
