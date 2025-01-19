import styled from "styled-components";

export const LanguageBarWrapper = styled.div`
  display: flex; /* Używamy flexbox */
  flex-wrap: wrap; /* Przy większej liczbie przycisków przenosi je na kolejne rzędy */
  justify-content: center; /* Wyrównanie poziome */
  align-items: center; /* Wyrównanie pionowe */
  gap: 10px; /* Odstępy między przyciskami */
  background-color: #f4f4f4;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 100%; /* Pasek zajmuje całą dostępną szerokość */
  overflow: hidden; /* Ukrywa nadmiar */
`;

export const LanguageButton = styled.button<{ isActive: boolean }>`
  padding: 10px 20px; /* Ustawienie większej przestrzeni wewnętrznej */
  min-width: 60px; /* Minimalna szerokość przycisków */
  border: none;
  border-radius: 15px;
  background-color: ${(props) => (props.isActive ? "#FF8C00" : "#e0e0e0")};
  color: ${(props) => (props.isActive ? "#fff" : "#333")};
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#FF7F00" : "#ccc")};
  }
`;
