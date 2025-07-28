import styled from "styled-components";

export const HomeContainer = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  scroll-behavior: smooth;
  @media (max-width: 768px) {
    padding: 0px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;

export const CenterSideHeader = styled.div`
  top: 30%;
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
  border-radius: 15px;
  padding: 20px;
  @media (max-width: 768px) {
    display: flex;
    position: relative;
    top: 150px;
    flex-direction: column;
    width: 100%;
    margin-left: 75px;
    margin-right: auto;
  }
`;
export const GlobeContainer = styled.div`
  width: 50%;
  height: 800px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-left: 800px;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
  }
`;
export const HeadContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: row
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 400px;
  @media (max-width: 768px) {
  margin-top: 100px;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
`;
export const Title = styled.h3`
  font-size: 72px;
  color: rgb(0, 0, 0);
  margin-bottom: 0;
  text-align: center;
  font-family: "Inter", sans-serif;
  @media (max-width: 768px) {
    font-size: 36px;
    margin-left: auto;
    text-align: center;
  }
`;
export const SubTitle = styled.h4`
  display: flex;
  font-size: 32px;
  color: rgb(0, 0, 0);
  text-align: justify;
  font-family: "Inter", sans-serif;
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: 400;
  line-height: 1.5;
  max-width: 800px;
  padding: 0 20px;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-left: auto;
    text-align: center;
  }
`;
