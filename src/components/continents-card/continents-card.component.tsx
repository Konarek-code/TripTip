import React from "react";
import {
  ContinentContainer,
  ContinetImages,
  ContinentLabel,
  ContinentItem,
} from "./continents-card.style";
import { continents } from "../../data/continents";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentContinent } from "../../store/homeContinent/homeContinent.selector";

import {
  Continent,
  setContinent,
} from "../../store/homeContinent/homeContinentSlice";

interface Props {
  isVisible: boolean;
}

const ContinentCard: React.FC<Props> = ({ isVisible }) => {
  const selectedContinent = useSelector(selectCurrentContinent);
  const dispatch = useDispatch();

  const handleSelect = (continent: Continent): void => {
    dispatch(setContinent(continent));
  };

  return (
    <ContinentContainer isVisible={isVisible}>
      {continents.map(({ name, image }) => (
        <ContinentItem
          key={name}
          selected={selectedContinent === name}
          onClick={() => {
            handleSelect(name as Continent);
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
