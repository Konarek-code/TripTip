import styled from "styled-components";
interface ContinentItemProps {
  selected: boolean;
}

export const ContinentContainer = styled.div<{ isVisible: boolean }>`
  width: 100%;
  max-width: 700px;
  top: 100%;
  overflow: clip;
  height: ${({ isVisible }) => (isVisible ? "600px" : "0px")};
  transition: height 0.5s ease-in-out;
  background-color: white;
  border-radius: 30px;
  border: ${({ isVisible }) => (isVisible ? "2px solid orange" : "none")};
  margin-top: 10px;
  z-index: 2;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding: ${({ isVisible }) => (isVisible ? "10px" : "0px")};
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
    height: ${({ isVisible }) => (isVisible ? "510px" : "0px")};
  }
`;

export const ContinentItem = styled.div<ContinentItemProps>`
  flex-basis: calc(25% - 20px);
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 30px;
  border: 1px solid orange;
  transition: background-color 0.3s ease;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "orange" : "transparent")};
  &:hover {
    background-color: orange;
  }
  @media (max-width: 768px) {
    flex-basis: calc(50% - 20px);
    margin: 5px;
  }
`;

export const ContinetImages = styled.img`
  border: 1px solid gray;
  border-radius: 20px;
  width: 90px;
  height: auto;
  object-fit: cover;
  background-color: white;
  flex-direction: row;
  align-items: flex-start;
  transition: background-color 0.1s;
  @media (max-width: 768px) {
    width: 70px;
  }
`;
export const ContinentLabel = styled.span`
  font-size: 1.2rem;
  margin-top: 5px;
  display: block;
  text-align: center;
  width: 100%;
  white-space: normal;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
