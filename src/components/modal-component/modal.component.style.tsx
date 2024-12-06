import styled from "styled-components";

type ModalProps = {
  isOpen: boolean;
};

export const ModalOverlay = styled.div<ModalProps>`
  display: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  max-width: 800px;
  margin: 100px auto;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
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
`;

export const FlagImage = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 80px;
  height: auto;
  border-radius: 5px;
`;

export const ModalBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  position: relative;
  margin-top: 40px;
`;

export const Divider = styled.div`
  width: 2px;
  background-color: #ddd;
  margin: 0 20px;
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
`;

export const ActionContainer = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding-left: 20px;
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
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
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
`;
