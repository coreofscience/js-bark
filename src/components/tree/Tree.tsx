import React, { FC } from "react";
import styled from "styled-components";

const Table = styled.table`
  table-layout: fixed;
  width: calc(100% - 2em);
  margin-left: 2em;
  border-collapse: collapse;
  font-family: Arial, Helvetica, sans-serif;
`;

const Header = styled.thead`
  box-shadow: 0px 5px 5px -5px gray;
  & tr th:first-child {
    width: 0;
  }
`;
const Body = styled.tbody``;
const Row = styled.tr`
  tbody &:hover {
    background-color: rgba(0, 244, 0, 0.1);
  }
  transition: background 0.5s ease;
`;
const Heading = styled.th`
  padding: 1em;
  text-align: left;
`;
const Cell = styled.td`
  padding: 1em;
  text-align: left;
`;

const Indicator = styled.div`
  margin: -1em 0;
  height: 3em;
  width: 1em;
  background-color: green;
  position: relative;
  left: -2em;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: white;
    transition: transform 0.5s ease;
  }

  &::before {
    top: -50%;
    transform: skewY(45deg) translateY(5px);
  }

  &::after {
    bottom: -50%;
    transform: skewY(-45deg) translateY(-5px);
  }

  tr:hover &::before {
    transform: skewY(45deg);
  }

  tr:hover &::after {
    transform: skewY(-45deg);
  }
`;

const Tree: FC = () => {
  return (
    <Table>
      <Header>
        <Row>
          <Heading></Heading>
          <Heading>Title</Heading>
          <Heading>DOI</Heading>
        </Row>
      </Header>
      <Body>
        {[1, 2, 3, 4, 5].map((number) => (
          <Row key={number}>
            <Cell>
              <Indicator />
            </Cell>
            <Cell>Article {number}</Cell>
            <Cell>
              <a href="https://dx.doi.org">DOI</a>
            </Cell>
          </Row>
        ))}
      </Body>
    </Table>
  );
};

export default Tree;
