import styled from "styled-components";

export const BestCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  border-radius: 30px;
  margin: 0 auto;
  margin-bottom: 100px;
  img {
    width: 90%;
    height: 600px;
    border-radius: 15px;
    border: 2px solid gray;
    transition: opacity 0.9s ease;
  }
  &:hover {
    img {
      opacity: 0.9;
    }
    span {
      opacity: 1;
  }
`;

export const ArrowLeft = styled.span`
  font-size: 36px;
  fotn-weight: bold;
  padding: 0px;
  cursor: pointer;
  user-select: none; /* Zapobiega zaznaczaniu tekstu */
  opacity: 0;
  transition: opacity 0.5s ease;
`;
export const ArrowRight = styled.span`
  font-size: 36px;
  cursor: pointer;
  padding: 0px;
  user-select: none; /* Zapobiega zaznaczaniu tekstu */
  opacity: 0;
  transition: opacity 0.5s ease;
`;
