import styled from "styled-components";

export const CountryItemContainer = styled.div`
  flex: 1 1 25%;
  height: 240px;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #444;
  margin: 50px 35px 40px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: rgba(
      255,
      255,
      255,
      0.9
    ); // Slight white background on hover
    border: 5px solid #ff7f50;
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    border-radius: 8px;
  }

  h2 {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    padding: 10px;
    z-index: 2;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    flex: 1 1 45%;
    height: 200px;
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
    height: 150px;
  }
`;
