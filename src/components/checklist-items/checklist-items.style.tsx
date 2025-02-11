import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  color: black;
  padding: 0;

  li {
    padding: 10px 0;
    border-bottom: 2px solid #eee;

    &:last-child {
      border-bottom: none;
    }
  }
`;
