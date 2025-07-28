import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  color: black;
  padding: 0;

  li {
    background-color: #f9f9f9;
    padding: 10px;
    border-bottom: 2px solid #eee;
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 12px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px #007bff;
  }
`;

export const AddButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 8px;

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
