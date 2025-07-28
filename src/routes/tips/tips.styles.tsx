import styled from "styled-components";

const COLORS = {
  primary: "#FF6F00",
  secondary: "#FFA726",
  textDark: "#333333",
  textLight: "#FFFFFF",
  backgroundLight: "#FFFFFF",
  backgroundDark: "#f4f4f4",
  gradient: "linear-gradient(135deg, #FF9100, #FF6F00)",
};
interface Props {
  isOnCategoryPage?: boolean;
}
export const PageWrapper = styled.div<Props>`
  font-family: Arial, sans-serif;
  color: ${COLORS.textDark};
  padding: 20px;
  background-color: ${COLORS.backgroundDark};
  min-height: 30vh;
  h2 {
    font-size: 1.75rem;
    color: ${COLORS.primary};
    margin-bottom: 20px;
  }
  overflow: ${(props) => (props.isOnCategoryPage === true ? "hidden" : "auto")};
  height: auto;
  min-height: 100vh;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 10px;
    h2 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 480px) {
    padding: 5px;
    h2 {
      font-size: 1.25rem;
    }
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 2.5rem;
    color: ${COLORS.primary};
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    color: ${COLORS.textDark};
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  margin: 0 auto;
`;

export const FullScreenCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  border-radius: 0;
  background: ${COLORS.gradient};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: ${COLORS.textLight};
  padding: 20px;
  padding-top: 60px;
  z-index: 1000;
  overflow-y: auto;

  @media (min-width: 768px) {
    top: 7vh;
    left: 7vw;
    width: 85vw;
    height: 85vh;
    border-radius: 16px;
    padding: 40px;
  }
`;

export const CancelButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1100;
  padding: 10px;

  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: ${COLORS.textDark};
    transform: scale(1.1);
  }
`;
