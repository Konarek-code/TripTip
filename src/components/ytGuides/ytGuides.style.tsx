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
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const Category = styled.div`
  margin-bottom: 50px;
  border-bottom: 3px solid #e63946;
  background: #ffffff;
  padding-bottom: 15px;

  h4 {
    font-size: 1.5rem;
    color: black;
    font-weight: 500;
    margin-bottom: 15px;
  }
`;

export const VideoList = styled.div`
  display: flex;
  margin-left: 30px;
  gap: 30px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 15px;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e63946;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const VideoItem = styled.li`
  background: #ffffff;
  margin-top: 25px;
  margin-left: 15px;
  flex: 0 0 400px;
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
  padding: 0px;

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
  }
`;
