import styled from "styled-components";

export const Box = styled.div`
  padding: 5% 3%;
  background: #222831;
  width: 100%;
  position: aboslute;
  bottom: 0px;
  transition: bottom 0.3s ease;
  &.visible {
    bottom: 0;
  }
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;
