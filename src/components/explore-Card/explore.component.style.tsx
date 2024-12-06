import styled from "styled-components";

export const ExploreContainer = styled.div`
  position: relative;
  width: 70%;
  height: 500px;
  display: flex;
  border-radius: 20px;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 15px;
  margin: 100px;
  padding-left: 500px;
  background: linear-gradient(135deg, #ffffff 20%, #ff5722 80%);
  overflow: hidden;

  h2 {
    position: absolute;
    top: 200px;
    left: 50px;
    padding: 20px;
    z-index: 3;
    color: #333;
    font-size: 36px;
    font-weight: bold;
    background: linear-gradient(45deg, #ff7e5f, #ff5722);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: transform 0.3s ease;
  }

  img {
    position: relative;
    z-index: 2;
    margin-bottom: 100px;
    height: auto;
    max-height: 300px;
    width: 250px;
    border-radius: 10px;
    object-fit: cover;
    transition:
      transform 0.3s ease,
      opacity 0.3s ease,
      box-shadow 0.3s ease;
    box-shadow:
      0px 4px 15px rgba(0, 0, 0, 0.2),
      inset 0px 0px 20px rgba(255, 255, 255, 0.1);
  }

  .main-image {
    transform: scale(1.05) rotate(-2deg);
  }

  .offset-up {
    transform: translateY(-25px) scale(0.95) rotate(2deg);
  }

  .offset-down {
    transform: translateY(25px) scale(0.95) rotate(-4deg);
  }

  img:hover {
    transform: scale(1.1) rotate(0deg);
    opacity: 0.95;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3);
  }

  h2:hover {
    transform: translateX(10px);
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Caption = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #fff;
  text-align: center;
  max-width: 250px;
  font-weight: 500;
  font-style: italic;
  letter-spacing: 1px;W
  line-height: 1.5;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom:0px;
  left: 0;
  right: 0;
  padding: 8px 15px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

`;
