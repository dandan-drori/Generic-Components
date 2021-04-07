import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Header>Welcome!</Header>
        <SubHeader>This template will help you get started.</SubHeader>
        <List>
          <ListItem>
            <Link href="https://reactjs.org">React Docs</Link>
          </ListItem>
        </List>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-x: hidden;
`;

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 6rem);
  background-color: #000011;
  text-align: center;
  padding: 2rem;
  padding-top: 3rem;

  @media (max-width: 768px) {
    padding: 2rem;
    padding-top: 4rem;
  }
`;

const Header = styled.p`
  color: #61dafb;
  font-size: 5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 3rem;
  }
`;

const SubHeader = styled.p`
  color: #fefefe;
  font-size: 2rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 4rem;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.li`
  list-style: none;
`;

const Link = styled.a`
  color: #0088ee;
  font-size: 1.5rem;
`;

export default Home;
