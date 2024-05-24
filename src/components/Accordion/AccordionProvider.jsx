import React from "react";

export const AccordionContext = React.createContext();

function AccordionProvider({ children }) {
  const [content, setContent] = React.useState({
    itemValue: "item-1",
    isDisplayed: true,
  });

  function displayContent(value) {
    if (content.itemValue === value) {
      setContent({
        ...content,
        isDisplayed: !content.isDisplayed,
      });
    } else {
      setContent({
        itemValue: value,
        isDisplayed: true,
      });
    }
  }

  return (
    <AccordionContext.Provider value={{ content, displayContent }}>
      {children}
    </AccordionContext.Provider>
  );
}

export default AccordionProvider;
