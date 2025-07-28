import { styled } from "styled-components";

export const ScorePanelContainer = styled.div`
  height: 600px;
  width: 1350px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.29);
  border-radius: 12px; /* Smooth corners */
  background: rgba(22, 53, 50, 0.51);
  margin: 50px auto;
  overflow: hidden;

  @media (max-width: 1400px) {
    width: 100%;
    padding: 0px;
    padding-top: 40px;
    flex-direction: column;
    align-items: center;
  }
`;
