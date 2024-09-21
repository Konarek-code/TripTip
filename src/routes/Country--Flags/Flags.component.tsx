import React, { useState } from "react";
import SearchBar from "../../components/searchbar/searchbar";
import { countriesData } from "../../components/countriesItems/countries.Data";
import Countries from "../../components/countries/countries.component";

const CountriesSearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredCountries = countriesData.filter((country) =>
    country.country.toLowerCase().includes(searchTerm),
  );

  return (
    <div>
      <h1>Search Countries</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        data={filteredCountries}
        renderResults={(data) => <Countries countries={data} />}
      />
    </div>
  );
};

export default CountriesSearchPage;
