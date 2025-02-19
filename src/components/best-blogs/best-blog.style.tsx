import styled from "styled-components";

const COLORS = {
  primary: "#1E90FF", // Niebieski (kojarzący się z niebem)
  secondary: "#FFD700", // Złoty (słońce)
  textDark: "#333333",
  textLight: "#FFFFFF",
  backgroundLight: "#FAFAFA",
  backgroundDark: "#F0F8FF",
  border: "#E0E0E0",
};

export const BlogsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  background-color: ${COLORS.backgroundDark};
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 90%; /* Automatyczna szerokość z limitem */
  max-width: 1200px; /* Maksymalna szerokość kontenera */
  margin: 0 auto; /* Wyśrodkowanie na stronie */
  gap: 20px;
  position: relative;
  overflow: hidden;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  animation: slideIN 0.5s ease-in-out;
  @keyframes slideIN {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

export const BlogInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  padding: 20px;
  background-color: black;
  color: ${COLORS.textLight};
  border: 1px solid ${COLORS.border};
  width: 100%;
  min-height: 500px;
  height: 100%;

  p {
    font-size: 1.1rem;
    line-height: 1.75;
    margin-top: 10px;
  }
`;

export const BlogAuthor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  padding: 20px;
  background-color: ${COLORS.backgroundLight};
  border: 1px solid ${COLORS.border};
  width: 100%;
  max-heigth: 100px;

  h3 {
    font-size: 1.5rem;
    color: ${COLORS.primary};
    margin-bottom: 5px;
  }

  p {
    font-size: 1rem;
    color: ${COLORS.textDark};
    line-height: 1;
  }
  img {
    align-self: end;
    width: 200px;
  }
`;

export const PaginationCircles = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  cursor: pointer;
  div {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: white;
    transition: background-color 0.3s ease;

    &.active {
      background-color: orange;
    }
  }
`;

export const BlogName = styled.h3`
  font-size: 1.25rem;
  color: ${COLORS.secondary};
  margin-bottom: 10px;
`;

export const BlogLink = styled.a`
  color: ${COLORS.primary};
  font-size: 1rem;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: ${COLORS.secondary};
  }
`;
