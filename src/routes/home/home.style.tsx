import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeContainer = styled.div`
  position: relative; /* Dodajemy position: relative */
  display: flex;
  margin: 30px 100px;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 200px;
  flex-direction: column;
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
    color: white;
    border-radius: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 10px;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
`;
