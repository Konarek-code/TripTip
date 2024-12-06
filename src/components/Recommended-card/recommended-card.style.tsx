import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  width: 70%;
  margin: 10px auto;
  padding: 20px;
  overflow: hidden;
`;

export const RecommendedCardsItem = styled.div`
  flex: 0 0 23%;
  height: auto;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;

  img {
    border-radius: 15px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 1160px;
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
    left: 250px;
  }

  &.right {
    right: 250px;
  }
`;

export const RecommendedCardLabel = styled.p`
  width: 70%;
  height: auto;

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
