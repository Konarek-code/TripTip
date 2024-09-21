import { styled } from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-border-radius: 20px;
  border-radius: 20px;
  -webkit-transition:
    background-color 0.218s,
    border-color 0.218s,
    box-shadow 0.218s;
  transition:
    background-color 0.218s,
    border-color 0.218s,
    box-shadow 0.218s;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: WHITE;
  border: 1px solid #747775;
  -webkit-border-radius: 20px;
  border-radius: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #1f1f1f;
  cursor: pointer;
  font-family: "Roboto", arial, sans-serif;
  font-size: 14px;
  height: 40px;
  letter-spacing: 0.25px;
  overflow: hidden;
  padding: 0 12px;
  position: relative;
  text-align: center;
  -webkit-transition:
    background-color 0.218s,
    border-color 0.218s,
    box-shadow 0.218s;
  transition:
    background-color 0.218s,
    border-color 0.218s,
    box-shadow 0.218s;
  vertical-align: middle;
  white-space: nowrap;
  width: auto;
  max-width: 400px;
  min-width: min-content;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
  img {
    height: 20px;
    margin-right: 12px;
    min-width: 20px;
    width: 20px;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const BurgerMenuButton = styled(BaseButton)`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  height: 30px;
  background: transparent;
  border: none;
  z-index: 20;

  div {
    width: 30px;
    height: 3px;
    background: black;
    border-radius: 10px;
    border:none
    position: relative;
  }

  @media (max-width: 600px) {
    display: flex;
    padding-left: 0px;
    margin-left: 10px;
  }
`;
export const SearchButton = styled(BaseButton)`
  min-width: 165px;
  width: auto;
  height: 50px;
  border-radius: 30px;
  background-color: #fec84b;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  transition: background-color 0.6s;
  text-transform: none;
  &:hover {
    background-color: black;
    color: white;
  }
`;
