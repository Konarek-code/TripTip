import styled from "styled-components";

export const CardContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? "0" : "-100%")};
  height: 100%;
  width: 300px;
  background-color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  transition: left 0.3s ease-in-out;
  z-index: 100;
  overflow: auto;
`;

export const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const CancelButton = styled.div`
  position: relative;
  left: 240px;
  bottom: 10px;
`;
