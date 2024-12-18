import styled from "styled-components";

export const PanelContainer = styled.div`
  height: 250px;
  width: 500px;
  margin: 50px 0 0 100px;
  border: none;
  border-radius: 15px;
  padding: 20px 40px;
  background: linear-gradient(135deg, #f0f0f0, #d9e4f5);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
`;

export const Title = styled.span`
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 0;
  display: block;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Textcontainer = styled.p`
  color: #555;
  font-size: 1.2rem;
  padding: 10px 0;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const Percent = styled.span`
  color: #4caf50;
  font-size: 2rem;
  font-weight: bold;
  display: block;
  margin-top: 10px;
  text-align: center;
  letter-spacing: 0.5px;
`;
