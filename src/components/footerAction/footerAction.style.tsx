import styled from "styled-components";

interface WrapperProps {
  backgroundImage: string;
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: 100%;
  margin-bottom: -200px;
  height: 600px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  color: white;
  font-family: Arial, sans-serif;
  z-index: 1;
  @media (max-width: 768px) {
    height: 500px;
    margin-bottom: -150px;
  }
`;

export const Container = styled.div`
  position: relative;
  top: 30%;
  left: 30%;
  width: 40%;
  height: 40%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 90%;
    height: 50%;
    top: 20%;
    left: 5%;
    padding: 20px;
  }
`;
export const BackToStartWrapper = styled.div`
  position: absolute;
  top: 55%;
  left: 45.5%;
  transform: translate(10%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  cursor: pointer;
  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin-top: 10px;
  }
`;

export const BackToStartButton = styled.button`
  width: 350px;
  height: 67px;
  background-color: #191515;
  color: white;
  border: none;
  display: flex;
  font-size: 32px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    width: 250px;
    height: 60px;
    font-size: 28px;
  }
`;

export const BackToStartLabel = styled.div`
  margin-top: 10px;
  font-weight: regular;
  color: white;
  font-size: 48px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const SignUpWrapper = styled.div`
  position: absolute;
  top: 55%;
  left: 54%;
  transform: translate(-110%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  cursor: pointer;
  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin-bottom: 20px;
  }
`;

export const SignUpLabel = styled.div`
  margin-bottom: 10px;
  font-weight: regular;
  font-size: 48px;
  color: white;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const SignUpButton = styled.button`
  width: 300px;
  height: 67px;
  background-color: #ef8b00;
  color: white;
  border: none;
  font-size: 32px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    width: 250px;
    height: 60px;
    font-size: 28px;
  }
`;
