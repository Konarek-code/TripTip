import styled from "styled-components";

export const RegionPanels = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px;
  width: 90%;
  margin: 0 30px;
`;

export const RegionPanel = styled.div<{ active: boolean }>`
  width: 100%;
  height: 250px; /* Adjust height as needed */
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;

  transform: ${({ active }) => (active ? "scale(1.05)" : "scale(1)")};

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    height: 100px;
  }
`;

export const RegionBackground = styled.div<{ background: string }>`
  width: 100%;
  height: 100%;
  background: url(${({ background }) => background}) center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const RegionName = styled.span`
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: bold;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 12px;
`;
