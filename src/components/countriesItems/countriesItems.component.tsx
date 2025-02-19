import { FC } from "react";
import { CountriesData } from "./countries.Data";
import { CountryItemContainer } from "./countriesItems.style";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modal/modal.reducer";

type CountriesItemsProps = {
  land: CountriesData;
  small?: boolean;
};

const CountriesItems: FC<CountriesItemsProps> = ({ land, small }) => {
  const { country, flag } = land;

  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch(openModal(land));
  };

  return (
    <CountryItemContainer onClick={handleClick} small={small ?? false}>
      <img src={flag} alt={`Flag of ${country}`} />
      <h2>{country}</h2>
    </CountryItemContainer>
  );
};

export default CountriesItems;
