import React from "react";
import styled from "styled-components";
import Button from "./Button";

const WelcomePage = (props) => {
  if (props.children) {
    return <Container>{props.children}</Container>;
  }

  return (
    <Container
      bgColor={props.containerBgColor}
      height={props.containerHeight}
      padding={props.containerPadding}
    >
      <HeadersContainer>
        <Header>{props.header || "Welcome!"}</Header>
        <SubHeader>
          {props.subHeader || "This is a generic component."}
        </SubHeader>
        <SubSubHeader>
          {props.subSubHeader ||
            "Change the props passed to this component to see the changes take effect. You can also pass children to this component to be rendered instead of the default."}
        </SubSubHeader>
        <ButtonsContainer>
          <Button>{props.mainButtonText || "Start"}</Button>
          <Button variation="outline">
            {props.outlineButtonText || "Contact"}
          </Button>
        </ButtonsContainer>
      </HeadersContainer>
    </Container>
  );
};

export default WelcomePage;

const Container = styled.div`
  display: flex;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#001030")};
  height: ${({ height }) => (height ? height : "calc(100vh - 6rem)")};
  padding: ${({ padding }) => (!padding ? padding : "4vh 8vw")};

  @media only screen and (min-width: 768px) {
    padding: ${({ padding }) => (padding ? padding : "9vh 16vw")};
  }
`;

const HeadersContainer = styled.div``;

const Header = styled.h1`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "7rem")};
  color: ${({ color }) => (color ? color : "var(--primary-color)")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "1.4")};
  letter-spacing: 1px;
`;

const SubHeader = styled.h3`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "3rem")};
  color: ${({ color }) => (color ? color : "#ccc")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "1.2")};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "2rem"};
`;

const SubSubHeader = styled.div`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.7rem")};
  color: ${({ color }) => (color ? color : "#aaa")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "60rem")};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "2rem"};
`;

const ButtonsContainer = styled.div`
  display: flex;
`;
