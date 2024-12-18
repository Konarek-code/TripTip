import styled from "styled-components";

import { BaseButton } from "../../components/buttons/buttons.styles";

export const CartDropdownContainer = styled.div`
  width: 300px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: absolute;
  overflow-y: auto;
  top: 80px;
  right: 400px;
  z-index: 5;
  ${BaseButton} {
    margin: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 14px;
  text-align: center;
  color: #999;
`;

export const CartItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 400px; // You can adjust this value based on your needs
  overflow-y: auto; // Enables vertical scrolling if the content overflows
  padding: 10px;
`;

export const ItemRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  img {
    width: 30px;
    height: 20px;
    object-fit: cover;
  }

  span {
    flex: 1;
    font-size: 14px;
    text-align: left;
  }

  button {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: darkred;
    }
  }
`;
