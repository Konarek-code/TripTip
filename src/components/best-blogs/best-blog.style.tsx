import styled from "styled-components";

const COLORS = {
  primary: "#1E90FF", // Niebieski (kojarzący się z niebem)
  secondary: "#FFD700", // Złoty (słońce)
  textDark: "#333333",
  textLight: "#FFFFFF",
  backgroundLight: "#FAFAFA",
  backgroundDark: "#F0F8FF",
};

export const BlogsContainer = styled.div`
  padding: 20px;
  background-color: ${COLORS.backgroundDark};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto;
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  color: ${COLORS.primary};
  text-align: center;
  margin-bottom: 20px;
`;

export const BlogList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const BlogItem = styled.li`
  background-color: ${COLORS.backgroundLight};
  border: 1px solid ${COLORS.primary};
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const BlogName = styled.h3`
  font-size: 1.25rem;
  color: ${COLORS.secondary};
  margin-bottom: 10px;
`;

export const BlogDetails = styled.p`
  font-size: 1rem;
  color: ${COLORS.textDark};
  line-height: 1.5;
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
