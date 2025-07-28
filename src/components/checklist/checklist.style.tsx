import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto 20px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding: 16px;
  }
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
  gap: 12px;
  margin-top: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FullScreenCard = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 320px;
  max-height: 80vh;
  background-color: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 1100;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4); // półprzezroczysty czarny
  z-index: 1090;
`;
