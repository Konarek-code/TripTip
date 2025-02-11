import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, auto);
  padding: 16px;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
`;
