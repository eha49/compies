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
  return (
    <TabList role="tablist" tabIndex={0}>
      {children}
    </TabList>
  );
}

function Trigger({ value, children }) {
  const { tab, setTab } = React.useContext(TabContext);

  return (
    <Button
      onClick={() => {
        setTab(value);
      }}
      role="tab"
      aria-selected={tab === value}
      aria-controls={value}
      tabIndex={value === tab ? 0 : -1}
      $value={value}
      $tab={tab}
    >
      {children}
    </Button>
  );
}

function Content({ value, children }) {
  const { tab } = React.useContext(TabContext);
  return (
    <TabContent
      $value={value}
      $tab={tab}
      role="tabpanel"
      tabIndex={0}
      aria-labelledby={value}
    >
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
  outline: none;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  padding: 12px 18px;
  border-bottom: ${(props) =>
    Object.is(props.$tab, props.$value)
      ? "2px solid currentColor"
      : "none"};

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
