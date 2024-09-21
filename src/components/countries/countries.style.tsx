import styled from "styled-components";

export const CountriesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Flag = styled.img`
  margin-right: 10px; /* Margines po prawej stronie flagi */
  height: 40px; /* Wysokość flagi */
  width: auto; /* Automatyczna szerokość, zachowuje proporcje */
  border: 1px solid black;
`;
