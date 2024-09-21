import styled from "styled-components";

export const SearchBlockContainer = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: auto;
  width: 40%;
  position: relative;
  z-index: 1;
`;

export const SearchBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 10px;
  background: white;
  font-size: 1.2rem;
  margin-bottom: 20px;
  border-radius: 40px;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  cursor: pointer;
  flex-direction: row;

  h2 {
    font-family: "Roboto", sans-serif;
    color: #797c83;
    font-size: 24px;
    margin: 0 auto;
  }
`;
