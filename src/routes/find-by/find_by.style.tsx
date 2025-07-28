import styled from "styled-components";

export const FindByContainer = styled.div`
  height: auto;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 100vw;
    overflow-x: hidden;
  }
`;

export const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const MapContainer = styled.div`
  background-color: rgb(255, 247, 247);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  justify-content: center;
  min-height: 500px;
  margin: 0 auto;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 10px;
    min-height: 400px;
  }
`;
