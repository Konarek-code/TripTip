import styled from "styled-components";

export const FullWidthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 60px 0;
  gap: 80px;
`;

export const Block = styled.div<{ reverse?: boolean }>`
  width: 100%;
  background: #f2e9e9;
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1250px;
  padding: 0 100px;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: ${({ reverse = false }) =>
      reverse ? "row-reverse" : "row"};
    align-items: center;
    justify-content: space-between;
    gap: 60px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 550px;
  height: auto;
  margin: 10px auto;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.2);
  object-fit: cover;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const TextBlock = styled.div`
  padding: 24px 32px;
  max-width: 600px;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const Text = styled.p`
  font-size: 1.25rem;
  color: #14213d;
  line-height: 1.8;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    text-align: left;
  }
`;
export const CitiesTitle = styled.h3`
  font-size: 28px;
  color: #14213d;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  line-height: 1.5;
  margin-bottom: 12px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 0 20px;
  }
`;
export const ContentTitle = styled.h2`
  font-size: 36px;
  color: #000;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  line-height: 1.5;
  max-width: 1250px;
  padding: 0 100px;
  margin: 0 auto 20px auto;
  @media (max-width: 768px) {
    font-size: 24px;
    padding: 0 20px;
  }
`;
