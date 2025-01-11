import React, { useState } from "react";
import {
  BestInsurancesContainer,
  Title,
  InsuranceList,
  InsuranceItem,
  InsuranceName,
  InsuranceDetails,
} from "./insurance.style";

interface ComparisonTool {
  name: string;
  details: string;
  url: string;
}

const BestComparisonTools: React.FC = () => {
  const [tools] = useState<ComparisonTool[]>([
    {
      name: "Rankomat",
      details:
        "Jedna z najpopularniejszych porównywarek ubezpieczeń OC/AC w Polsce.",
      url: "https://www.rankomat.pl",
    },
    {
      name: "Mubi",
      details:
        "Szybka i prosta w obsłudze porównywarka ubezpieczeń z atrakcyjnymi promocjami.",
      url: "https://www.mubi.pl",
    },
    {
      name: "Cuk Ubezpieczenia",
      details:
        "Porównywarka oferująca szeroki wybór ubezpieczeń oraz doradztwo na miejscu.",
      url: "https://cuk.pl",
    },
    {
      name: "Porówneo",
      details:
        "Narzędzie do szybkiego porównywania cen ubezpieczeń OC/AC online.",
      url: "https://www.porowneo.pl",
    },
  ]);

  return (
    <BestInsurancesContainer>
      <Title>Best Insurance Comparison Tools</Title>
      <InsuranceList>
        {tools.map((tool, index) => (
          <InsuranceItem key={index}>
            <InsuranceName>{tool.name}</InsuranceName>
            <InsuranceDetails>{tool.details}</InsuranceDetails>
            <a href={tool.url} target="_blank" rel="noopener noreferrer">
              Visit {tool.name}
            </a>
          </InsuranceItem>
        ))}
      </InsuranceList>
    </BestInsurancesContainer>
  );
};

export default BestComparisonTools;
