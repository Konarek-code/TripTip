import styled from "styled-components";

export const HomeContainer = styled.div`
  position: relative;
  background: #eeeeee;
  display: flex;
  margin: 0;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  hr {
    border: none;
    height: 2px;
    background-color: orange;
    width: 69%;
    margin-bottom: 50px;
  }
`;
export const LastContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  background-color: #2d4059;
  padding: 0px 100px;
  overflow: hidden;
  p {
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 0px;
    padding: 0px;
  }

  img {
    opacity: 1;
    margin-top: 100px;
    margin-bottom: 20px;
    height: auto;
    width: 80%;
    max-width: 300px;
    transition: opacity 0.5s ease;
    backface-visibility: hidden;

    &:hover {
      opacity: 0.5;
    }
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin-bottom: 10px;
    padding: 10px 0;
    text-align: start;
  }

  span {
    font-size: 16px;
    color: #00bcd4;
    padding: 0 10px;
    margin-bottom: 10px;
  }
  p:nth-of-type(1) {
    img {
      margin-left: 35px;
    }
  }
  p:nth-of-type(3) {
    h2 {
      margin-left: 15px;
    }
  }
`;

export const ImageHome = styled.img`
  width: 100%;
  height: 700px;
  margin-bottom: 100px;
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0) 100%
  );
`;
export const SearchBarOverlay = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const HeadContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 50px;
  h3 {
    top: 5%;
    left: 30%;
    position: absolute;
    z-index: 1;
    font-size: 50px;
    font-weight: bold;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 5px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    font-family: "Arial", sans-serif;
  }
`;
export const InformationContainer = styled.div`
  width: 70%;
  height: auto;
  justify-content: start;
  align-content: center;
  h3 {
    font-size: 30px;
    font-weight: bold;
    color: dark;
    padding: 0px 20px;
    font-family: "Arial", sans-serif;
  }
  h2 {
    font-size: 20px;
    color: dark;
    font-weight: normal;
    padding: 0px 25px;
    font-family: "Arial", sans-serif;
  }
`;
