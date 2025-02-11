import styled from "styled-components";

export const Wrapper = styled.div`
  width: 70%;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  display: flex;
  font-size: 1.2rem;
  color: black;
  align-items: center;
  justify-content: center;
`;

export const ChecklistInput = styled.input`
  background: none;
  background-color: white;
  color: black;
  font-size: 18px;
  padding: 5px 0px 10px 5px;
  display: block;
  width: 75%;
  border: none;
  border-radius: 20px;
  border: 1px solid grey;
  margin: 10px 20px;

  &:focus {
    outline: none;
  }
  @media (max-width: 800px) {
    margin: 15px auto;
    width: 85%;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const FullScreenCard = styled.div`
  position: absolute;
  top: 0vh;
  left: 0vh;
  border-radius: 16px;
  width: 300px;
  height: 400px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: transparent;
  z-index: 1100;
  }
`;
