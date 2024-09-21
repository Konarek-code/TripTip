import styled from "styled-components";

export const CountryItemContainer = styled.div`
  flex: 1 1 30%; /* Flaga zajmuje około 30% szerokości, aby zmieściły się 3 w rzędzie */
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  /* Marginesy, aby pierwsza i ostatnia flaga miały odstępy */
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
  &:hover {
    background-color: white;
    border: 5px solid orange;
    transform: scale (0.5);
  }
  img {
    width: 100%; /* Flaga wypełnia 100% szerokości rodzica */
    height: 100%; /* Flaga wypełnia 100% wysokości rodzica */
    object-fit: cover; /* Zapewnia dopasowanie obrazu bez zniekształcenia */
    z-index: 0;
  }

  h2 {
    position: absolute;
    bottom: 0; /* Pozycjonowanie na dole flagi */
    left: 0;
    right: 0;
    margin: 0;
    padding: 10px;
    z-index: 2;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5); /* Półprzezroczyste tło pod tekstem */
    color: white; /* Biały kolor tekstu dla lepszej widoczności */
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
