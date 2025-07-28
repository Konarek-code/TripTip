import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";

export const CardContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? "0" : "-100%")};
  height: 100vh;
  width: 260px;
  background: linear-gradient(135deg, #ffffff, #f9fafb);
  box-shadow: 4px 0 12px rgba(0, 0, 0, 0.15);
  transition: left 0.3s ease-in-out;
  z-index: 200;
  border-radius: 0 12px 12px 0;
  overflow-y: auto;
`;

export const CardContent = styled.div`
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-bottom: 1px solid #ff6b00;
  padding-bottom: 32px;
`;

export const CancelButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 8px;
  color: #333;
  transition: color 0.2s;

  &:hover {
    color: #e53935;
  }
`;

export const NavLink = styled(RouterLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 16px;
  color: rgb(41, 40, 40);
  transition:
    background-color 0.2s,
    color 0.2s;

  &.active {
    background-color: #ff6b00;
    color: #ffffff;
  }

  svg {
    font-size: 18px;
  }
`;
