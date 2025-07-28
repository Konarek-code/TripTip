import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 0 20px;
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
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 8px;
  }
`;

export const CountryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  transition:
    transform 0.2s ease,
    border 0.2s ease;

  &:hover {
    transform: scale(1.02);
    border: 2px solid orange;
  }

  @media (max-width: 480px) {
    height: 100px;
  }
`;

export const Flag = styled.img`
  width: auto;
  height: 100%;
  object-fit: contain;
`;

export const CountryName = styled.h2`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 10px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
`;
