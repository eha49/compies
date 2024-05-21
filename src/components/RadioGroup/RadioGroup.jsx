import React from "react";
import styled from "styled-components";

function RadioGroup({ groupTitle, groupItems, itemName }) {
  const [selected, setSelected] = React.useState(() => {
    return groupItems[0];
  });
  return (
    <fieldset role="radiogroup" aria-labelledby={groupTitle}>
      <legend>{`${groupTitle}:`}</legend>

      {groupItems.map((option) => {
        return (
          <Wrapper key={option}>
            <input
              type="radio"
              name={itemName}
              id={option}
              value={option}
              checked={option === selected}
              onChange={(event) => setSelected(event.target.value)}
            />
            <Label htmlFor={option}>{option}</Label>
          </Wrapper>
        );
      })}
    </fieldset>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Label = styled.label`
  text-transform: capitalize;
`;

export default RadioGroup;
