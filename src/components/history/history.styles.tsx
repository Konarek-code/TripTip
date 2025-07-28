import styled from "styled-components";

export const Section = styled.section<{ background: string }>`
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: url(${({ background }) => background}) no-repeat center center;
  background-size: cover;
  position: relative;
  scroll-snap-align: start;
`;

export const Background = styled.div<{ image: string }>`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  width: 100%;
  filter: brightness(0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  @media (max-width: 768px) {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 70vh;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  margin: 0 auto;
  background-color: rgba(10, 10, 10, 0.6);
  display: flex;
  color: white;
  flex-direction: row;
  padding: 60px 100px;
  text-align: center;

  @media (max-width: 768px) {
    display: flex;
    margin: 0 px;
    padding: 0px 50px;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
`;

export const EraTitle = styled.h2`
  font-size: 72px;
  font-weight: 800;
  letter-spacing: 2px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 100px;
    align-self: center;
    font-size: 32px;
  }
`;

export const EraDescription = styled.p`
  font-size: 32px;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;

  color: #e0e0e0;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 0px;
    align-self: center;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  scroll-snap-type: y mandatory;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  position: sticky;
  top: 10px;
  align-self: flex-start;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: fit-content;
  @media (max-width: 768px) {
    display:flex;
    gap: 16px;
    width: 100%;
`;
export const Step = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ active }) => (active ? "#fff" : "#bbb")};
  transition: 0.3s;
`;

export const Circle = styled.div<{ active: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 12px;
  background-color: ${({ active }) => (active ? "#fff" : "#666")};
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
