import styled from "styled-components";

export const BeenMapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: #eeeeee;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;
