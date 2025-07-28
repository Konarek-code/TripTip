import styled from "styled-components";

export const CountriesLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  max-width: 1400px;
  margin: 30px auto;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
