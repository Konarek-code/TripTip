import styled from "styled-components";

export const FlagsContainer = styled.div`
  background: linear-gradient(135deg, #222831, #393e46);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);

  h1 {
    margin-top: 100px;
    color: #fff;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
      margin-top: 40px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.2rem;
      margin-top: 30px;
    }
  }
`;
