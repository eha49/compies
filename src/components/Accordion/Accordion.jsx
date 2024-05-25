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
  return <ItemWrapper>{children}</ItemWrapper>;
}

function Trigger({ value, children }) {
  const { content, displayContent } =
    React.useContext(AccordionContext);
  const isShown = content.itemValue === value && content.isDisplayed;
  return (
    <TriggerHeading>
      <Button
        onClick={() => {
          displayContent(value);
        }}
      >
        {children}
        <StyledChevron strokeWidth={1.5} $isShown={isShown} />
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

const ItemWrapper = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid ${COLORS.dark};
  }
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
  border-top: 1px solid ${COLORS.dark};
  display: ${(props) => (props.$isShown ? "revert" : "none")};
`;

const StyledChevron = styled(ChevronDown)`
  transform: ${(props) =>
    props.$isShown ? "rotate(180deg)" : "rotate(0deg)"};
`;

Accordion.Item = Item;
Accordion.Trigger = Trigger;
Accordion.Content = Content;

export default Accordion;
