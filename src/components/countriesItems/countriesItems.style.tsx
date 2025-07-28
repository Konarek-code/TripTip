import styled from "styled-components";

export const CountryItemContainer = styled.div<{ small?: boolean }>`
  flex: 1 1 ${(props) => ((props.small ?? false) ? "100%" : "25%")}; // Default to false if small is null/undefined
  height: ${(props) =>
    (props.small ?? false)
      ? "100px"
      : "240px"}; // Default to false if small is null/undefined
  max-width: ${(props) =>
    (props.small ?? false)
      ? "none"
      : "400px"}; // Default to false if small is null/undefined
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #444;
  margin: ${(props) =>
    (props.small ?? false)
      ? "10px"
      : "50px 35px 40px"}; // Default to false if small is null/undefined
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
    width: ${(props) =>
      (props.small ?? false)
        ? "50px"
        : "100%"}; // Default to false if small is null/undefined
    height: ${(props) =>
      (props.small ?? false)
        ? "50px"
        : "100%"}; // Default to false if small is null/undefined
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
    padding: ${(props) =>
      (props.small ?? false)
        ? "5px"
        : "10px"}; // Default to false if small is null/undefined
    z-index: 2;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: ${(props) =>
      (props.small ?? false)
        ? "0.8rem"
        : "1.2rem"}; // Default to false if small is null/undefined
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    flex: 1 1 45%;
    height: ${(props) =>
      (props.small ?? false)
        ? "80px"
        : "200px"}; // Default to false if small is null/undefined
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
    height: ${(props) =>
      (props.small ?? false)
        ? "60px"
        : "150px"}; // Default to false if small is null/undefined
  }
`;
