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
  background-color: #fec84b;
  height: 40px;
  font-size: 24px;
  margin: 15px;
  font-family: "Roboto", sans-serif;
  transition: background-color 0.6s;
  text-transform: none;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const AkceptButton = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: rgb(11, 163, 69);
  border: 2px solid rgb(11, 163, 69);
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: gray;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    font-size: 16px;
  }

  &:hover {
    background-color: rgb(11, 163, 69);
    color: white;
    .icon {
      background-color: white;
      color: rgb(11, 163, 69);
    }
  }
`;

export const EditButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    background-color: gray;
    border-color: darkgray;
  }
`;
export const ArrowButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: rgb(11, 163, 69);
  border: 2px solid rgb(11, 163, 69);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  .icon {
    font-size: 20px;
    color: rgb(11, 163, 69);
  }

  &:hover {
    background-color: rgb(11, 163, 69);
    color: white;
    border-color: rgb(11, 163, 69);
  }
`;
export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    145deg,
    #8bc34a,
    #c8e6c9
  ); 
  padding: 14px 30px; 
  margin-bottom: 20px;
  border: none; 
  border-radius: 40px; /
  width: auto;
  height: 50px;
  font-size: 18px;
  font-weight: 600; 
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); 
  transition: all 0.3s ease; 

  &:hover {
    background: linear-gradient(
      145deg,
      #4caf50,
      #81c784
    ); /* Darker green on hover */
    transform: translateY(-2px); /
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2); 
  }

  svg {
    border: 2px solid white; 
    border-radius: 50%; 
    font-size: 24px;
    background-color: #4caf50; 
    margin-right: 12px;
    transition: all 0.3s ease; 

    &:hover {
      background-color: #388e3c; 
      border-color: #388e3c; 
      transform: scale(1.1); 
    }
  }
`;
