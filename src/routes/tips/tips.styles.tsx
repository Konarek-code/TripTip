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
  height: ${(props) => (props.isOnCategoryPage === true ? "90vh" : "auto")};
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

export const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "large-card-1 large-card-1 small-card-1 small-card-2"
    "large-card-2 large-card-2 small-card-3 small-card-4";
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-areas:
      "large-card-1"
      "large-card-2"
      "small-card-1"
      "small-card-2"
      "small-card-3"
      "small-card-4";
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const StyledImage = styled.img`
  width: 400px;
  height: auto;
`;
interface CategoryCardProps {
  isLarge?: boolean;
  imageUrl?: string;
}
export const CategoryCard = styled.div<CategoryCardProps>`
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  padding: ${(props) => (props.isLarge === true ? "10px" : "25px")};
  text-align: center;
  min-width: ${(props) => (props.isLarge === true ? "340px" : "200px")};
  min-height: ${(props) => (props.isLarge === true ? "300px" : "150px")};
  grid-area: ${(props) =>
    props.isLarge === true ? "large-card" : "small-card"};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  h3 {
    position: relative;
    font-size: ${(props) => (props.isLarge === true ? "2rem" : "1.5rem")};
    font-weight: 700;
    color: white;
    margin-bottom: ${(props) => (props.isLarge === true ? "6px" : "6px")};
    text-transform: capitalize;
    z-index: 2;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  &.active {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(2);
    z-index: 20;
    width: 80vw;
    height: 80vh;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.35);
    border-radius: 12px;
    transition:
      transform 1s ease,
      width 0.5s ease,
      height 0.5s ease;
  }
  &.large-card-1 {
    grid-area: large-card-1;
  }

  &.large-card-2 {
    grid-area: large-card-2;
  }

  &.small-card-1 {
    grid-area: small-card-1;
  }

  &.small-card-2 {
    grid-area: small-card-2;
  }

  &.small-card-3 {
    grid-area: small-card-3;
  }

  &.small-card-4 {
    grid-area: small-card-4;
  }
`;

export const FullScreenCard = styled.div`
  position: absolute;
  top: 7vh;
  left: 15vh;
  border-radius: 16px;

  width: 85vw;
  height: 85vh;
  background: ${COLORS.gradient};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${COLORS.textLight};
  padding: 40px;
  z-index: 1000;
   
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
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: ${COLORS.textDark};
    transform: scale(1.1);
  }
`;
