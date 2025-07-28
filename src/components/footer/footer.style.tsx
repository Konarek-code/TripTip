import styled from "styled-components";

export const Box = styled.div`
  padding: 5% 3%;
  background: #14213d;
  width: 100%;
  position: relative;
  bottom: 0;
  z-index: 10;
  overflow: hidden;
  @media (max-width: 1000px) {
    padding: 70px 30px;
    top: -1px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1300px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    padding: 0px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: auto;
  }
`;
export const WaveSvg = styled.svg`
  display: block;
  width: 100%;
  height: 200px;
  z-index: 2;
  position: relative;

  @media (max-width: 768px) {
    height: 60px;
  }
`;
