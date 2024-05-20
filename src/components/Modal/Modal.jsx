import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
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

  return createPortal(
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <Wrapper>
          <ModalBackdrop
            onClick={handleDismiss}
            exit={{
              opacity: 0,
              transition: {
                ease: "easeIn",
                duration: 0.6,
              },
            }}
            animate={{
              opacity: 0.75,
              transition: {
                ease: "easeOut",
                duration: 0.3,
                restDelta: 0.01,
              },
            }}
            initial={{ opacity: 0 }}
          />
          <ModalContent
            aria-modal="true"
            aria-label={title}
            role="dialog"
            initial={{ y: "100vh" }}
            animate={{
              y: 0,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 40,
                ease: "easeOut",
                restDelta: 0.01,
              },
            }}
            exit={{
              y: "100vh",
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 40,
                ease: "easeIn",
              },
            }}
          >
            <Button
              onClick={handleDismiss}
              initial={{ y: 0 }}
              animate={{
                y: "-100%",
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 40,
                  delay: 0.4,
                  ease: "easeOut",
                  restDelta: 0.01,
                },
              }}
              exit={{
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 40,
                  ease: "easeIn",
                },
              }}
            >
              <Close />
              <VisuallyHidden>Dismiss Modal</VisuallyHidden>
            </Button>
            <h2>{title}</h2>
            {children}
          </ModalContent>
        </Wrapper>
      </RemoveScroll>
    </FocusLock>,
    document.body
  );
}

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  display: grid;
  place-content: center;
  padding: 16px;
`;
const ModalBackdrop = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-color: hsl(0deg 0% 0%);
`;

const ModalContent = styled(motion.div)`
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

const Button = styled(motion.button)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${COLORS.white};
`;

export default Modal;
