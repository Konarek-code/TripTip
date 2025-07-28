import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  flex-direction: column;
  overflow-y: auto;
  gap: 30px;
`;

export const Title = styled.h3`
  font-size: 2rem;
  color: #111;
  font-weight: bold;
  margin-bottom: 25px;
  text-align: center;
`;

interface CategoryProps {
  $color: string;
}

export const Category = styled.div<CategoryProps>`
  margin-bottom: 50px;
  padding-bottom: 15px;
  border-bottom: 3px solid ${(props) => props.$color};
  background: #ffffff;

  h4 {
    font-size: 1.5rem;
    color: ${(props) => props.$color};
    font-weight: 700;
    margin-bottom: 15px;
  }
`;

export const VideoList = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 10px;
  padding-left: 4px;
  box-shadow: 0 6px 15px ${(props) => props.color ?? "rgba(0, 0, 0, 0.1)"};
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e63946;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const VideoItem = styled.li`
  background: #ffffff;
  margin-top: 25px;
  flex: 0 0 320px; // zmieniamy ze stałego 400px
  height: 330px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgb(197, 0, 0);
    cursor: pointer;
  }

  img {
    border-radius: 12px;
    object-fit: cover;
    width: 100%;
    height: 70%;
    margin-bottom: 15px;
  }

  p {
    font-size: 1rem;
    color: black;
    margin: 0;
    font-weight: 500;
    flex-grow: 1;
    line-height: 1.4;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    flex: 0 0 260px;
    height: 300px;
  }

  @media (max-width: 480px) {
    flex: 0 0 85vw;
    height: 280px;
  }
`;
