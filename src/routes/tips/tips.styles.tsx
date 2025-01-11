// styles/tips.styles.ts
import styled from "styled-components";

const COLORS = {
  primary: "#FF6F00", // Pomarańczowy
  secondary: "#FFA726", // Łagodniejszy pomarańczowy
  textDark: "#333333", // Ciemny tekst
  textLight: "#FFFFFF", // Jasny tekst
  backgroundLight: "#FFFFFF", // Białe tło
  backgroundDark: "#f4f4f4", // Jasnoszare tło
  gradient: "linear-gradient(135deg, #FF9100, #FF6F00)", // Gradient pomarańczowy
};

export const PageWrapper = styled.div`
  font-family: Arial, sans-serif;
  color: ${COLORS.textDark};
  padding: 20px;
  background-color: ${COLORS.backgroundDark};
  min-height: 100vh;

  h2 {
    font-size: 1.75rem;
    color: ${COLORS.primary};
    margin-bottom: 20px;
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

export const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(700px, 1fr)
  ); /* Responsywność */
  gap: 30px; /* Większy odstęp między kartami */
  margin-top: 20px;
`;
export const StyledImage = styled.img`
  width: 400px;
  height: auto;
`;
export const CategoryCard = styled.div`
  background: ${COLORS.gradient};
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  padding: 25px;
  text-align: center;
  min-width: 280px;
  min-height: 200px;
  transition:
    transform 0.5s ease,
    box-shadow 0.3s ease;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: ${COLORS.textLight};
  }

  p {
    font-size: 1rem;
    color: ${COLORS.textLight};
    margin-bottom: 15px;
  }

  &.active {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(2);
    z-index: 1000;
    width: 80vw;
    height: 80vh;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.35);
    border-radius: 12px;
    transition:
      transform 1s ease,
      width 0.5s ease,
      height 0.5s ease;
  }
`;

export const FullScreenCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${COLORS.gradient}; /* Gradient tła */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${COLORS.textLight};
  padding: 40px;
  z-index: 1000;

  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    color: ${COLORS.textDark};
    background: ${COLORS.textLight};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: ${COLORS.secondary};
    }
  }
`;
