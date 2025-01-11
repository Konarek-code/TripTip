// components/Checklist.tsx
import React from "react";
import { Wrapper, Title, List } from "./checklist.style";

const items = [
  "Paszport / dowód osobisty",
  "Bilet lotniczy",
  "Ubezpieczenie podróżne",
  "Ładowarka i powerbank",
  "Apteczka podróżna",
];

const Checklist: React.FC = () => {
  const items = [
    "Paszport / dowód osobisty",
    "Bilet lotniczy",
    "Ubezpieczenie podróżne",
    "Ładowarka i powerbank",
    "Apteczka podróżna",
  ];

  return (
    <Wrapper>
      <Title>Checklist: Co zabrać w podróż?</Title>
      <List>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </List>
    </Wrapper>
  );
};

export default Checklist;
