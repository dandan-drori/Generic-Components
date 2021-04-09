import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = (props) => {
  console.log(props?.links);
  return (
    <Container
      bgColor={props?.bgColor}
      height={props?.height}
      color={props?.color}
    >
      <Logo logo={props?.logo} logoColor="#eee" />
      <Links>
        {props?.links?.map((link) => (
          <ListItem key={link?.text}>
            <StyledLink to={link?.to}>{link?.text}</StyledLink>
          </ListItem>
        ))}
      </Links>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 0;
  height: ${({ height }) => (height ? height : "12rem")};
  width: 100vw;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "var(--primary-dark)"};
  color: ${({ color }) => (color ? color : "var(--primary-light)")};
  z-index: 3;
  padding: 1rem 3rem;
  border-top: 9px solid black;
`;

const Links = styled.ul`
  width: 30%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  margin: 0.5rem 0;
  padding: 1rem 0;
`;

const StyledLink = styled(Link)`
  color: ${({ color }) => (color ? color : "var(--primary-light)")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.3rem")};
`;
