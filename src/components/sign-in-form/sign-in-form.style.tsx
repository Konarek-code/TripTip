import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 92.9vh;
  overflow: hidden;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100vh;
  justify-content: start;
  padding: 20px;
  margin-top: 100px;
  margin-left:auto;
  margin-right:auto;

  label {
    padding: 5px;
  }

  
  Button {
    margin-left: 160px;
    margin-top: 30px;
    width: 400px;

     @media (max-width: 800px) {
      width: 70%;
      padding: 10px;
      margin: 15px auto;
    }
    }

    @media (max-width: 800px) {
      width: 100%;
      padding: 10px;
      margin: 15px auto;
    }
    
  }
`;

export const SingupLinker = styled.a`
  margin: 10px 275px;
  width: 300px;
  font-size: 14px;
  color: grey;
  cursor: pointer;
  @media (max-width: 800px) {
    margin: 15px auto;
    width: 200px;
  }
`;

export const LabelTitle = styled.label`
  margin-left: 200px;
  font-size: 36px;
  font-weight: bold;

  @media (max-width: 400px) {
    margin-left: 25px;
  }
  @media (max-width: 800px) {
    margin-left: 210px;
  }
`;

export const ImageRightSide = styled.img`
  width: 60%;
  height: auto;
  object-fit: cover;
  border: 1px solid black;
  @media (max-width: 800px) {
    display: none;
  }
`;
export const Separator = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 16px auto;

  span {
    margin: 0 12px;
    color: black;
    font-size: 14px;
    white-space: nowrap;
  }

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: grey;
  }
`;
