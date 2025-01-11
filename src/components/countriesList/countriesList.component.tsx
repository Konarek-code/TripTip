import { FC, Key } from "react";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector
import {
  selectActiveRegion,
  selectSelectedCountries,
} from "../../store/countrieslist/countries.selector"; // Import selektora
import { CountriesToAdd } from "./countriesList.style";
import { toggleCountrySelection } from "../../store/countrieslist/countries.reducer";

interface CountriesListProps {
  countries: Array<{ id: Key; country: string }>;
}

const CountriesList: FC<CountriesListProps> = ({ countries }) => {
  const dispatch = useDispatch();

  const activeRegion = useSelector(selectActiveRegion);
  const selectedCountries = useSelector(selectSelectedCountries);
  const handleCheckboxChange = (country: string, isChecked: boolean): void => {
    dispatch(toggleCountrySelection(country));
  };
  console.log(selectedCountries);

  return (
    <CountriesToAdd
      isOpen={
        activeRegion !== null &&
        activeRegion !== undefined &&
        activeRegion.trim() !== ""
      }
    >
      <h1>Choose Countries</h1>
      <p>
        {activeRegion != null && activeRegion.trim() !== ""
          ? `Select countries in the ${activeRegion} region.`
          : "Click on a region to display countries."}
      </p>
      {activeRegion != null && activeRegion.trim() !== "" && (
        <>
          <ul>
            {countries.map((land) => (
              <li key={land.id}>
                <input
                  type="checkbox"
                  checked={selectedCountries.includes(land.country)}
                  id={land.country}
                  onChange={(e) => {
                    handleCheckboxChange(land.country, e.target.checked);
                  }}
                />
                <label htmlFor={land.country}>{land.country}</label>
              </li>
            ))}
          </ul>
        </>
      )}
    </CountriesToAdd>
  );
};

export default CountriesList;
