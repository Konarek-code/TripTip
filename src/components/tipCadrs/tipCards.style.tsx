import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
interface CategoryCardProps {
  imageUrl?: string;
}

export const CategoryCard = styled.div<CategoryCardProps>`
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  padding: 25px;
  text-align: center;
  min-height: 300px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  h3 {
    color: white;
    font-size: 2rem;
    font-weight: bold;
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
  }
`;
