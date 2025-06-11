import React from "react";
import {
  ContinentContainer,
  ContinetImages,
  ContinentLabel,
  ContinentItem,
} from "./continents-card.style";
import { continents } from "../../data/continents";

import { useDispatch } from "react-redux";
import { setContinent } from "../../store/homeContinent/homeContinentSlice";

interface Props {
  isVisible: boolean;
}

const ContinentCard: React.FC<Props> = ({ isVisible }) => {
  const dispatch = useDispatch();

  const handleSelect = (continent: string): void => {
    dispatch(setContinent(continent));
  };

  return (
    <ContinentContainer isVisible={isVisible}>
      {continents.map(({ name, image }) => (
        <ContinentItem
          key={name}
          onClick={() => {
            handleSelect(name);
          }}
        >
          <ContinetImages src={image} alt={`${name} continent`} />
          <ContinentLabel>{name}</ContinentLabel>
        </ContinentItem>
      ))}
    </ContinentContainer>
  );
};

export default ContinentCard;
