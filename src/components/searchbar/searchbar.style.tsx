import styled from "styled-components";

export const SearchBarContainer = styled.div`
  jsutify-content: center;
  display: flex;
  height: 70px;
  width: 600px;
`;
export const SearchBarInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1.2rem;
  margin-bottom: 20px;
  border-radius: 30px;
`;
export const CountriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(150px, 1fr)
  ); /* Automatyczne dopasowanie do szerokości */
  gap: 15px; /* Odstępy między flagami */
  width: 100%; /* Zapewnia, że siatka wypełnia całą szerokość rodzica */
`;

export const CountryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 150px; /* Ustawia wysokość kontenera flagi */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  overflow: hidden;
  &:hover {
    background-color: white;
    border: 5px solid orange;
    transform: scale (0.5);
  }
`;

export const Flag = styled.img`
  width: auto; /* Zachowuje proporcje */
  height: 100%; /* Flaga wypełnia wysokość kontenera */
  object-fit: contain; /* Zapewnia zachowanie proporcji bez przycinania */
`;

export const CountryName = styled.h2`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 10px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5); /* Półprzezroczyste tło pod tekstem */
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
`;
