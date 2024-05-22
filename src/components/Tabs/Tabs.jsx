// import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

function Tabs({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

function List({ children }) {
  return <TabList>{children}</TabList>;
}

function Trigger({ children }) {
  return <Button>{children}</Button>;
}

function Content({ children }) {
  return <TabContent>{children}</TabContent>;
}

const Wrapper = styled.div`
  width: 350px;
  max-width: 100%;
  border: 1px solid ${COLORS.dark};
  border-radius: 6px;
`;

const TabList = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  padding: 12px 18px;

  ${TabList} & {
    flex: 1;
  }
`;

const TabContent = styled.div``;

Tabs.List = List;
Tabs.Trigger = Trigger;
Tabs.Content = Content;

export default Tabs;
