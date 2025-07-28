import styled from "styled-components";

type ModalProps = {
  isOpen: boolean;
};

export const ModalOverlay = styled.div<ModalProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  overflow-y: auto; /* żeby można było scrollować na telefonie */
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  max-width: 800px;
  margin: 100px auto;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    margin: 40px 10px;
    max-width: 95%;
    padding: 15px;
    border-radius: 8px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  h1 {
    font-size: 24px;
    color: #333;
    margin: 0;
  }

  p {
    font-size: 16px;
    color: #666;
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #333;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;

  &:hover {
    color: #ff4500;
  }

  @media (max-width: 480px) {
    top: 5px;
    left: 5px;
    font-size: 28px;
  }
`;

export const FlagImage = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 80px;
  height: auto;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 120px;
  }

  @media (max-width: 480px) {
    position: static;
    width: 100%;
    max-width: 150px;
    margin-bottom: 15px;
    border-radius: 8px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  position: relative;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const Divider = styled.div`
  width: 2px;
  background-color: #ddd;
  margin: 0 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: 2px;
    margin: 20px 0;
  }
`;

export const InformationContent = styled.div`
  flex: 1;
  text-align: justify;
  font-size: 18px;
  line-height: 1.8;
  color: #333;
  padding-right: 20px;
  font-family: "Arial", sans-serif;
  font-weight: 400;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #222;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding-right: 0;
    font-size: 16px;
  }
`;

export const ActionContainer = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 5px;
    flex-direction: row;
    justify-content: center;
    gap: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const ActionButton = styled.button`
  background-color: #ff4500;
  color: white;
  margin-top: 100px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #e63e00;
  }

  @media (max-width: 768px) {
    margin-top: 0;
    font-size: 14px;
    padding: 8px 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 20px;
  }
`;

export const Icon = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border 0.3s ease;

  &:hover {
    transform: scale(1.2) rotate(5deg);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    border: 2px solid #ff4500;
  }

  &:active {
    transform: scale(1.1) rotate(0);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: 2px solid #e63e00;
  }

  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
  }
`;
