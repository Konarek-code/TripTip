import styled from "styled-components";

export const BooksWrapper = styled.div`
  background: #fdfdfd;
  border-radius: 12px;
  width: 90%;
  padding: 30px;
  margin: 20px auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  overflow-y: auto;

  @media (min-width: 768px) {
    width: 70%;
  }
`;
export const Category = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid black;
`;
export const Title = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 30px;
  text-align: center;
  color: #222;
  font-weight: 600;
`;

export const BooksList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

export const BookItem = styled.li`
  flex: 1 1 250px;
  max-width: 150px;
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  h4 {
    font-size: 1.2rem;
    margin: 10px 0;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    height: auto;
    max-height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  a {
    color: #007bff;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
