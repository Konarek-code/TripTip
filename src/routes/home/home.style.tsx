import styled from "styled-components";

export const HomeContainer = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  scroll-behavior: auto;
  hr {
    border: none;
    height: 2px;
    background-color: orange;
    width: 69%;
    margin-bottom: 50px;
  }
`;

export const ImageHome = styled.img`
  display: flex;
  margin: 200px 0 0px 800px;
  width: 800px;
  height: 800px;
  object-fit: cover;
`;

export const SearchBarOverlay = styled.div`
  height: auto;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px;
  border-radius: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 20%;
`;
export const CenterSideHeader = styled.div`
  top: 10%;
  left: 30%;
  width: 750px;
  display: flex;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px; // Zaokrąglone rogi
  padding: 20px;
`;

export const HeadContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: row
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 350px;
`;
export const Title = styled.h3`
  margin-top: 350px;
  font-size: 48px;
  color: rgb(0, 0, 0);
  text-align: center;
  font-family: "Inter", sans-serif;
`;
export const SubTitle = styled.h4`
  font-size: 24px;
  color: rgb(0, 0, 0);
  text-align: center;
  font-family: "Inter", sans-serif;
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: 400;
  line-height: 1.5;
  max-width: 800px;
  padding: 0 20px;
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 0 10px;
  }
`;
