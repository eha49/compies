import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants.js";

function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const id = React.useId(0);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting Form!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Label htmlFor={`email-${id}`}>Email</Label>
        <Input
          type="email"
          id={`email-${id}`}
          required={true}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div>
        <Label htmlFor={`password-${id}`}>Password</Label>
        <Input
          type="password"
          value={password}
          required={true}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <Button>Submit</Button>
    </form>
  );
}

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${COLORS.dark};
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px;

  &:first-of-type {
    margin-bottom: 24px;
  }
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 48px;
  padding: 8px 24px;
  font-size: 1.12rem;
  color: ${COLORS.white};
  background-color: ${COLORS.dark};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:focus {
    outline: 2px solid c ${COLORS.dark};
    outline-offset: 2px;
  }
`;
export default LoginForm;
