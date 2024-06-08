import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  padding: 100px 300px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled(Link)`
  position: relative;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 3px;

  &:hover {
    img {
      opacity: 0.3;
    }
    h3 {
      opacity: 1;
    }
  }

  img {
    opacity: 1;
    height: 300px;
    display: block;
    transition: opacity 0.5s ease;
    backface-visibility: hidden;
  }
  h3 {
    background-color: #ffa500;
    color: white; /* Dodałem kolor tekstu, aby był czytelny */
    border-radius: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 10px; /* Opcjonalne - dodaje trochę przestrzeni wokół tekstu */
    opacity: 0;
    transition: opacity 0.5s ease;
  }
`;
