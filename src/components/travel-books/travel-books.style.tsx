import styled from "styled-components";

// Styled Components
export const BooksWrapper = styled.div`
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

export const BooksList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const BookItem = styled.li`
  flex: 1 1 calc(33.333% - 20px); /* 3 kolumny */
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  h4 {
    font-size: 1rem;
    margin: 10px 0;
  }

  p {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 10px;
  }

  a {
    color: #007bff;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
