import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
  top: -20px;
  font-size: 12px;
  color: ${mainColor};
`;

type FormInputLabelProps = {
  shrink?: boolean;
};

export const FormInputLabel = styled.label<FormInputLabelProps>`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  left: 70px;
  top: 5px;
  pointer-events: none;
  transition: 300ms ease all;
  ${({ shrink }) => shrink === true && shrinkLabelStyles};
`;

export const Input = styled.input`
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 5px 0px 10px 5px;
  display: block;
  width: 80%;
  border: none;
  border-radius: 10px;
  border-bottom: 1px solid ${subColor};
  margin-left: 70px;
  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }

  @media (max-width: 800px) {
    margin: 15px auto;
    width: 75%;
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 20px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  @media (max-width: 800px) {
    margin: 15px auto;
  }
`;
