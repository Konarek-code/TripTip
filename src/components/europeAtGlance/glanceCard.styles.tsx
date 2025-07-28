import styled from "styled-components";

export const GlanceWrapper = styled.section`
  background-color: rgb(250, 234, 218);
  padding: 80px 120px;
  text-align: center;
  color: #14213d;
  width: 100%;
  margin: 100px 0 200px 0;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const GlanceTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 48px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

export const GlanceCard = styled.div`
  background: white;
  border: 1px solid orange;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(20, 33, 61, 0.1);
  padding: 32px 24px;
  max-width: 320px;
  flex: 1;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

export const Icon = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 12px;
`;

export const CardText = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
`;
