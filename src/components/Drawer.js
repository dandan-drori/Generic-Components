import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Drawer = (props) => {
  return (
    <>
      <Container>
        <LinksList>
          {props?.links?.map((link) => (
            <ListItem key={link.text}>
              <StyledLink to={link.to || "/"}>
                {link.text || "default"}
              </StyledLink>
            </ListItem>
          ))}
        </LinksList>
      </Container>
      <Background isMenuOpen={props.isMenuOpen} />
    </>
  );
};

export default Drawer;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: ${({ margin }) => (margin ? margin : "6rem 4rem 0 0")};
  z-index: 2;
`;

const LinksList = styled.ul`
  li:nth-child(1) {
    animation-delay: 0;
  }
  li:nth-child(2) {
    animation-delay: 500ms;
  }
`;

const ListItem = styled.li`
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "1rem"};
  opacity: 0;
  transition: opacity 0.5s ease-in;
  animation: ${fadeIn} 0.5s forwards;
`;

const StyledLink = styled(Link)`
  color: ${({ color }) => (color ? color : "#eee")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "2.6rem")};
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--primary-color);
  width: ${({ width }) => (width ? width : "50rem")};
  height: ${({ height }) => (height ? height : "60rem")};
  border-radius: 50%;
  transition: transform 0.5s;
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? "translate(300px, -170px)" : "translate(600px, -370px)"};
`;
