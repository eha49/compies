import React from "react";
import styled from "styled-components";
import { ChevronDown } from "react-feather";
import AccordionProvider, {
  AccordionContext,
} from "./AccordionProvider";

function Accordion({ children }) {
  return (
    <AccordionProvider>
      <Wrapper>{children}</Wrapper>
    </AccordionProvider>
  );
}

function Item({ children }) {
  return <div>{children}</div>;
}

function Trigger({ value, children }) {
  const { displayContent } = React.useContext(AccordionContext);
  return (
    <TriggerHeading>
      <Button
        onClick={() => {
          displayContent(value);
        }}
      >
        {children}
        <ChevronDown strokeWidth={1.5} />
      </Button>
    </TriggerHeading>
  );
}

function Content({ value, children }) {
  return <ContentWrapper>{children}</ContentWrapper>;
}

const Wrapper = styled.div`
  --spacing: 20px;
  width: 320px;
  max-width: 100%;
  border: 2px solid green;
`;
const TriggerHeading = styled.h3`
  margin: 0;
`;
const Button = styled.button`
  width: 100%;
  height: 45px;
  border: none;
  background: transparent;
  padding-left: var(--spacing);
  padding-right: var(--spacing);
  font-size: ${16 / 16}rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentWrapper = styled.div`
  padding-left: var(--spacing);
  padding-right: var(--spacing);
`;

Accordion.Item = Item;
Accordion.Trigger = Trigger;
Accordion.Content = Content;

export default Accordion;
