import React from "react";
import styled from "styled-components";
import { ChevronDown } from "react-feather";
import AccordionProvider, {
  AccordionContext,
} from "./AccordionProvider";
import { COLORS } from "../constants";

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
  const { content, displayContent } =
    React.useContext(AccordionContext);
  const { isDisplayed } = content;
  return (
    <TriggerHeading>
      <Button
        onClick={() => {
          displayContent(value);
        }}
      >
        {children}
        <StyledChevron strokeWidth={1.5} $isDisplayed={isDisplayed} />
      </Button>
    </TriggerHeading>
  );
}

function Content({ value, children }) {
  const { content } = React.useContext(AccordionContext);
  const isShown = content.itemValue === value && content.isDisplayed;

  return (
    <ContentWrapper $isShown={isShown}>{children}</ContentWrapper>
  );
}

const Wrapper = styled.div`
  --spacing: 20px;
  width: 320px;
  max-width: 100%;
  border: 1px solid ${COLORS.dark};
  border-radius: 4px;
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

  &:not(:last-of-type) {
    border-bottom: 1px solid ${COLORS.dark};
  }
`;

const ContentWrapper = styled.div`
  padding-left: var(--spacing);
  padding-right: var(--spacing);

  display: ${(props) => (props.$isShown ? "revert" : "none")};
`;

const StyledChevron = styled(ChevronDown)`
  transform: ${(props) =>
    props.$isDisplayed ? "rotate(180deg)" : "rotate(0deg)"};
`;

Accordion.Item = Item;
Accordion.Trigger = Trigger;
Accordion.Content = Content;

export default Accordion;
