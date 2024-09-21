import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 70%;
  margin: 100px auto;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

export const RecommendedCardsitem = styled.div`
  flex: 0 0 23%
  height: 300px;
  width: auto;
  margin: 10px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 30px;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  z-index: 1;

  &:hover {
    background: rgba(200, 200, 200, 0.8);
  }

  &.left {
    left: 10px; 
  }

  &.right {
    right: 10px; 
  }
`;
export const RecommendedCardLabel = styled.p`
  width: 70%;
  height: auto;
  justify-content: start;
  align-content: center;

  h3 {
    font-size: 20px;
    font-weight: normal;
    color: dark;
    padding: 0px 20px;
    font-family: "Arial", sans-serif;
  }
  h2 {
    font-size: 30px;
    color: dark;
    font-weight: bold;
    padding: 0px 25px;
    font-family: "Arial", sans-serif;
  }
`;
