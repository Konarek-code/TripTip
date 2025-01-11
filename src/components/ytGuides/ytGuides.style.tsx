import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

export const VideoList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
`;

export const VideoItem = styled.li`
  background: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    color: #555;
  }
`;
