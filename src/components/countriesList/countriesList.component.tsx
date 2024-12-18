import { FC, Key } from "react";
import { CountriesToAdd } from "./countriesList.style";

interface CountriesListProps {
  countries: Array<{ id: Key; country: string }>; // Fixed here
  activeRegion: string | null;
}

const CountriesList: FC<CountriesListProps> = ({ countries, activeRegion }) => {
  return (
    <CountriesToAdd
      isOpen={
        activeRegion !== null &&
        activeRegion !== undefined &&
        activeRegion !== ""
      }
    >
      <h1>Choose Countries</h1>
      <p>
        {activeRegion != null && activeRegion.trim() !== ""
          ? `Select countries in the ${activeRegion} region.`
          : "Click on a region to display countries."}
      </p>
      {activeRegion != null && activeRegion.trim() !== "" && (
        <ul>
          {countries.map((land) => (
            <li key={land.id}>
              <input type="checkbox" id={land.country} />
              <label htmlFor={land.country}>{land.country}</label>
            </li>
          ))}
        </ul>
      )}
    </CountriesToAdd>
  );
};

export default CountriesList;
