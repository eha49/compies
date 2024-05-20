import React from "react";
import styled from "styled-components";
import { X as Close } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import { COLORS } from "../constants.js";

function Modal({ title, handleDismiss, children }) {
  React.useEffect(() => {
    function handleKeydown(event) {
      if (event.code === "Escape") {
        handleDismiss();
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [handleDismiss]);

  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <Wrapper>
          <ModalBackdrop />
          <ModalContent
            aria-modal="true"
            aria-label={title}
            role="dialog"
          >
            <Button onClick={handleDismiss}>
              <Close />
              <VisuallyHidden>Dismiss Modal</VisuallyHidden>
            </Button>
            <h2>{title}</h2>
            {children}
          </ModalContent>
        </Wrapper>
      </RemoveScroll>
    </FocusLock>
  );
}

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  display: grid;
  place-content: center;
  padding: 16px;
`;
const ModalBackdrop = styled.div`
  position: absolute;
  inset: 0;
  background-color: hsl(0deg 0% 0% /0.75);
`;

const ModalContent = styled.div`
  position: relative;
  width: 350px;
  max-width: 100vw;
  background-color: ${COLORS.white};
  padding: 32px;
  border-radius: 8px;

  & h2 {
    text-align: center;
    color: ${COLORS.dark};
    margin-bottom: 16px;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-100%);
  padding: 18px;
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${COLORS.white};
`;

export default Modal;
