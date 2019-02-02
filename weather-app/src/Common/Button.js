import styled, { css } from "styled-components";

const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  border-radius: 3px;
  padding: 0.8rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: #4fc3f7;
  border: 2px solid #4fc3f7;
  font-size: 14px;

  :hover {
    background: #4fc3f7;
    color: white;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem #b3e5fc;
  }
  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props =>
    props.primary &&
    css`
      background: #4fc3f7;
      color: white;

      :hover {
        background: #03a9f4;
      }
    `}

  ${props =>
    props.danger &&
    css`
      border: 2px solid #ff8a65;
      color: #ff8a65;

      :hover {
        background: #ff8a65;
        color: white;
      }
      :focus {
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);
      }
    `}
`;

export default Button;
