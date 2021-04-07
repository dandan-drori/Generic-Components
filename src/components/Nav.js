import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const fadeIn = keyframes`
  0% {
    transform: translateX(100vw);
    opacity: 0;
  }
  100%{
    transform: translateX(0vw);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    transform: translateX(-100vw);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
`;

const Nav = (props) => {
  const deviceWidth = window.innerWidth;

  if (props.children) {
    return <Container>{props.children}</Container>;
  }

  return (
    <Container
      padding={props.containerPadding}
      bgColor={props.containerBgColor}
      height={props.containerHeight}
    >
      <Logo
        to="/"
        fontWeight={props.logoFontWeight}
        fontSize={props.logoFontSize}
        color={props.logoColor}
      >
        {props.logo || "Logo"}
      </Logo>
      {deviceWidth > 768 ? (
        <Links>
          {props?.links?.map((link, index) => (
            <LinkItem key={index} linkItemMargin={props.linkItemMargin}>
              <StyledLink to={link.to || "/"} fontSize={props.linkFontSize}>
                {link.text || "Link"}
              </StyledLink>
            </LinkItem>
          ))}
        </Links>
      ) : (
        <Hamburger />
      )}
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ padding }) => (padding ? padding : "3rem")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fefefe")};
  height: ${({ height }) => (height ? height : "4rem")};
`;

const Logo = styled(Link)`
  color: ${({ color }) => (color ? color : "#050505")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "700")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "2rem")};
  animation: ${fadeOut} 500ms;
`;

const Links = styled.ul`
  display: flex;

  li:nth-child(1) {
    animation-delay: 0ms;
  }
  li:nth-child(2) {
    animation-delay: 500ms;
  }
  li:nth-child(3) {
    animation-delay: 1000ms;
  }
`;

const LinkItem = styled.li`
  margin: ${({ margin }) => (margin ? margin : "3vw")};
  animation: ${fadeIn} 500ms;
`;

const StyledLink = styled(Link)`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.7rem")};
  color: ${({ color }) => (color ? color : "#050505")};
`;
