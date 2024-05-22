import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

const TabContext = React.createContext();

function Tabs({ children }) {
  const [tab, setTab] = React.useState("tab1");
  console.log("re");
  return (
    <TabContext.Provider value={{ tab, setTab }}>
      <Wrapper>{children}</Wrapper>
    </TabContext.Provider>
  );
}

function List({ children }) {
  return <TabList>{children}</TabList>;
}

function Trigger({ value, children }) {
  const { setTab } = React.useContext(TabContext);

  return (
    <Button
      onClick={() => {
        setTab(value);
      }}
    >
      {children}
    </Button>
  );
}

function Content({ value, children }) {
  const { tab } = React.useContext(TabContext);
  return (
    <TabContent $value={value} $tab={tab}>
      {children}
    </TabContent>
  );
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

const TabContent = styled.div`
  border-top: 1px solid ${COLORS.dark};
  padding: 16px;
  display: ${(props) =>
    Object.is(props.$tab, props.$value) ? "revert" : "none"};
`;

Tabs.List = List;
Tabs.Trigger = Trigger;
Tabs.Content = Content;

export default Tabs;
