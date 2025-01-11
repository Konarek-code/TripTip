import styled from "styled-components";

const COLORS = {
  primary: "#FF6F00", // Pomarańczowy
  secondary: "#FF9100", // Jaśniejszy pomarańczowy
  textDark: "#333333", // Ciemny tekst
  textLight: "#FFFFFF", // Jasny tekst
  backgroundLight: "#FFFFFF", // Białe tło
  backgroundDark: "#f4f4f4", // Jasnoszare tło
};

export const BestInsurancesContainer = styled.div`
  padding: 20px;
  background-color: ${COLORS.backgroundDark};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  color: ${COLORS.primary};
  text-align: center;
  margin-bottom: 20px;
`;

export const InsuranceList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const InsuranceItem = styled.li`
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

export const InsuranceName = styled.h3`
  font-size: 1.25rem;
  color: ${COLORS.secondary};
  margin-bottom: 10px;
`;

export const InsuranceDetails = styled.p`
  font-size: 1rem;
  color: ${COLORS.textDark};
  line-height: 1.5;
`;
