import React from "react";
import { AnimatePresence } from "framer-motion";
import LoginForm from "./components/Modal/LoginForm";
import Modal from "./components/Modal/Modal";
import { styled, createGlobalStyle } from "styled-components";
import { COLORS } from "./components/constants";

function App() {
  const [isOpen, showIsOpen] = React.useState(false);

  function handleDismiss() {
    showIsOpen(false);
  }

  return (
    <>
      <Button onClick={() => showIsOpen(true)}>Open Modal</Button>
      <AnimatePresence>
        {isOpen && (
          <Modal title="Log In" handleDismiss={handleDismiss}>
            <LoginForm />
          </Modal>
        )}
      </AnimatePresence>
      <GlobalStyles />
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
     box-sizing: border-box;
  }

  html, body {
  height: 100%;
  background-color: ${COLORS.white};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 }

  body {
    margin: 0;
    display: grid;
    place-content: center;
  }
`;

const Button = styled.button`
  display: block;
  padding: 12px 24px;
  font-size: 1.12rem;
  color: ${COLORS.white};
  background-color: ${COLORS.dark};
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:focus {
    outline: 2px solid ${COLORS.dark};
    outline-offset: 2px;
  }
`;

export default App;
