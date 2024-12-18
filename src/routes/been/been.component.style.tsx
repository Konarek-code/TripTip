import styled from "styled-components";

export const BeenMapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: #eeeeee;
  flex-direction: column;
`;
export const Map = styled.div`
  height: 600px;
  width: 1350px;
  display: flex;
  justify-content: space-between; /* Space out map and content */
  padding: 20px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.29); /* More prominent shadow */
  border-radius: 12px; /* Smooth corners */
  background: rgba(22, 53, 50, 0.51); /* Soft light background */
  margin: 50px auto; /* Centering the map */
  overflow: hidden; /* Ensures content inside map stays within boundaries */

  @media (max-width: 1400px) {
    width: 100%;
    padding: 10px;
  }
`;
