import styled from "styled-components";

export const BooksWrapper = styled.div`
  background: #fff;
  border-radius: 16px;
  width: 100%;
  max-width: 1500px;
  padding: 40px 30px;
  margin: 40px auto;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  overflow-y: auto;
`;

export const Category = styled.div`
  margin-bottom: 30px;
  border-bottom: 2px solid black;
  padding-bottom: 15px;
`;

export const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 40px;
  text-align: center;
  color: #222;
  font-weight: 700;
  letter-spacing: 0.05em;
`;

export const BooksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;
export const BookItem = styled.li`
  flex: 1 1 250px;
  max-width: 300px;
  background: #f0f0f5;
  border-radius: 14px;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.25);
  }

  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 14px;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  h4 {
    font-size: 1rem;
    margin: 0 0 6px;
    font-weight: 600;
    color: #111;
    line-height: 1.2;
  }

  p {
    font-size: 0.85rem;
    color: #555;
    margin: 0;
    height: 34px;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    flex: 1 1 45%;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

export const CategoryName = styled.h3`
  font-size: 1.6rem;
  color: #333;
  text-align: left;
  font-weight: 700;
  margin-bottom: 16px;
`;
