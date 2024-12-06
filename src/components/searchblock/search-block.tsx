import styled from "styled-components";

export const SearchBlockContainer = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: 10px;
  height: auto;
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const SearchBlock = styled.div`
  width: 100%;
  max-width: 700px;
  border: 1px solid #bababa;
  border-radius: 30px;
  height: auto;
  display: flex;
  background: white;
  font-size: 1.2rem;
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
