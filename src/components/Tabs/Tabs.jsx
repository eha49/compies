import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

const TabContext = React.createContext();

function reducer(tab, action) {
  switch (action.type) {
    case "tab1": {
      return action.value;
    }
    case "tab2": {
      return action.value;
    }
    case "tab3": {
      return action.value;
    }
  }
}

function Tabs({ children }) {
  const [tab, dispatch] = React.useReducer(reducer, "tab1");

  React.useEffect(() => {
    const keydownCodes = ["ArrowLeft", "ArrowRight", "Home", "End"];

    function handleKeydown(event) {
      let currentActiveElement = document.activeElement;
      if (currentActiveElement.role !== "tab") {
        return;
      }
      if (!keydownCodes.includes(event.code)) {
        return;
      }
      if (event.code === "ArrowLeft") {
        currentActiveElement.previousElementSibling?.focus();
      }
      if (event.code === "ArrowRight") {
        currentActiveElement.nextElementSibling?.focus();
      }
      if (event.code === "Home") {
        currentActiveElement.parentElement.firstElementChild?.focus();
      }
      if (event.code === "End") {
        currentActiveElement.parentElement.lastChild?.focus();
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <TabContext.Provider value={{ tab, dispatch }}>
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
  const { tab, dispatch } = React.useContext(TabContext);
  return (
    <Button
      onClick={() => {
        dispatch({
          type: value,
          value: value,
        });
      }}
      onFocus={() => {
        dispatch({
          type: value,
          value: value,
        });
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
      ? "1px solid currentColor"
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
