import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;

  li {
    padding: 10px 0;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }

    a {
      color: #007bff;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
