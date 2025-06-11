import styled from "styled-components";

interface WrapperProps {
  backgroundImage: string;
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: 100%;
  height: 900px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  color: white;
  font-family: Arial, sans-serif;
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
`;

export const BackToStartLabel = styled.div`
  margin-top: 10px;
  font-weight: regular;
  color: white;
  font-size: 48px;
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
`;

export const SignUpLabel = styled.div`
  margin-bottom: 10px;
  font-weight: regular;
  font-size: 48px;
  color: white;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
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
`;
