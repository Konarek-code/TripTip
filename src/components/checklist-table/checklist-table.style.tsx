import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // desktop
  grid-template-rows: auto;
  gap: 16px;
  padding: 16px;
  width: 100%;
  margin: auto;
  background-color: rgb(253, 240, 240);
  border: 1px solid #ddd;
  border-radius: 8px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
