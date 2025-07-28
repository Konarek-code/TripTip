import { FC, Key } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectActiveRegion,
  selectSelectedCountries,
} from "../../store/countrieslist/countries.selector";
import { CountriesToAdd } from "./countriesList.style";
import { toggleCountrySelection } from "../../store/countrieslist/countries.reducer";

import { auth } from "../../utils/firebase/firebase.utils";
import { saveSelectedCountriesToFirestore } from "../../utils/countries/countries.utils";
import store from "../../store/store";

interface CountriesListProps {
  countries: Array<{ id: Key; country: string }>;
}

const CountriesList: FC<CountriesListProps> = ({ countries }) => {
  const dispatch = useDispatch();

  const activeRegion = useSelector(selectActiveRegion);
  const selectedCountries = useSelector(selectSelectedCountries);

  const handleCheckboxChange = async (
    country: string,
    isChecked: boolean,
  ): Promise<void> => {
    dispatch(toggleCountrySelection(country));

    const user = auth.currentUser;
    if (user === null || user === undefined) return;

    const state = store.getState();
    const selectedCountriesByRegion = state.countries.selectedCountriesByRegion;

    try {
      await saveSelectedCountriesToFirestore(
        user.uid,
        selectedCountriesByRegion,
      );
    } catch (error) {
      console.error("Error saving countries:", error);
    }
  };

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
                    void handleCheckboxChange(land.country, e.target.checked);
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
