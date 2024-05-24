// import React from "react";
// import { AnimatePresence } from "framer-motion";
// import LoginForm from "./components/Modal/LoginForm";
// import Modal from "./components/Modal/Modal";
// import RadioGroup from "./components/RadioGroup/RadioGroup";
// import Tabs from "./components/Tabs/Tabs";
// import {
//   Breadcrumbs,
//   Crumbs,
// } from "./components/Breadcrumbs/Breadcrumbs";
import Accordion from "./components/Accordion/Accordion";
import { styled, createGlobalStyle } from "styled-components";
import { COLORS, VALID_LANGUAGES } from "./components/constants";

function App() {
  // const [isOpen, showIsOpen] = React.useState(false);

  // function handleDismiss() {
  //   showIsOpen(false);
  // }

  return (
    <>
      {/* <Button onClick={() => showIsOpen(true)}>Open Modal</Button>
      <AnimatePresence>
        {isOpen && (
          <Modal title="Log In" handleDismiss={handleDismiss}>
            <LoginForm />
          </Modal>
        )}
      </AnimatePresence> */}
      {/* <RadioGroup
        groupTitle="Select language"
        groupItems={VALID_LANGUAGES}
        itemName="current-language"
      /> */}
      {/* <Tabs>
        <Tabs.List>
          <Tabs.Trigger value="tab1">Account</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Password</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Logout</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          <div>This is some content about Account Tab</div>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <div>This is some content about Password Tab</div>
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <div>This is some content about Logout Tab</div>
        </Tabs.Content>
      </Tabs> */}
      {/* <Breadcrumbs>
        <Crumbs href="/" isCurrentPage={true}>
          Home
        </Crumbs>
        <Crumbs href="/tops">Tops</Crumbs>
        <Crumbs href="/tops/shirts">Shirts</Crumbs>
        <Crumbs href="/tops/shirts/casuals">Causals</Crumbs>
      </Breadcrumbs> */}

      <Accordion>
        <Accordion.Item>
          <Accordion.Trigger>Is this working?</Accordion.Trigger>
          <Accordion.Content>Yes!</Accordion.Content>
        </Accordion.Item>
      </Accordion>

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

// const Button = styled.button`
//   display: block;
//   padding: 12px 24px;
//   font-size: 1.12rem;
//   color: ${COLORS.white};
//   background-color: ${COLORS.dark};
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;

//   &:focus {
//     outline: 2px solid ${COLORS.dark};
//     outline-offset: 2px;
//   }
// `;

export default App;
