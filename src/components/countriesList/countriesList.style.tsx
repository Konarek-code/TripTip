import styled from "styled-components";

interface RegionContentProps {
  isOpen: boolean;
}

export const CountriesToAdd = styled.div<RegionContentProps>`
  flex: 1;
  background: linear-gradient(135deg, #222831, #393e46);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  width: 80%;
  margin-left: 5%;

  h1 {
    color: #ffffff;
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: left;
  }

  p {
    color: #eeeeee;
    font-size: 1.2rem;
    text-align: left;
    margin-bottom: 25px;
    line-height: 1.5;
  }

  ul {
    list-style-type: none;
    padding: 0;
    width: 100%;
  }

  li {
    margin: 15px 0;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    transition:
      background-color 0.3s ease,
      transform 0.2s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.25);
      transform: scale(1.08);
    }
  }

  input[type="checkbox"] {
    margin-right: 15px;
    transform: scale(1.5);
    cursor: pointer;
  }

  label {
    color: #ffffff;
    font-size: 1.2rem;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin-top: 20px;
    margin-left: 0;
    padding: 20px;
  }
`;
