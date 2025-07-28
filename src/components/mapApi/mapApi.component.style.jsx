import styled from "styled-components";

export const MapWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const WorldMapContainer = styled.div`
  width: 100%;
  max-width: 800px;

  svg {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const RegionText = styled.p`
  margin-top: 20px;
  padding: 10px;
  background-color: #222831;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  text-align: center;
  width: 100%;
  max-width: 300px;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px;
    max-width: 90%;
  }
`;
