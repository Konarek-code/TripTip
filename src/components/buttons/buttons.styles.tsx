import styled from "styled-components";

export const BaseButton = styled.button`
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 13px;
  padding: 0 18px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  &hover {
    background: linear-gradient(90deg, #03a9f4, #f441a5);
    filter: blur(1.2em);
  }

  &active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }

  @media (min-width: 768px) {
  }
`;
