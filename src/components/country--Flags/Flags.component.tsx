import React, { useState } from "react";
import SearchBar from "../searchbar/searchbar";
import Countries from "../countries/countries.component";
import Modal from "../modal-component/modal.component";
import { FlagsContainer } from "./flags.style";
import { countriesData } from "../countriesItems/countries.Data";

const CountriesSearchPage: React.FC<{ selectedRegion: string | null }> = ({
  selectedRegion,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredCountries = countriesData.filter((country) => {
    // Check explicitly if searchTerm is non-empty
    const matchesSearch =
      searchTerm !== ""
        ? country.country.toLowerCase().startsWith(searchTerm.toLowerCase())
        : true;

    // Handle nullable selectedRegion explicitly
    const matchesRegion =
      selectedRegion !== null && selectedRegion !== undefined
        ? country.regionshortcut.toLocaleLowerCase() === selectedRegion
        : true;
    console.log("Selected Region:", selectedRegion);

    return matchesSearch && matchesRegion;
  });

  return (
    <FlagsContainer>
      <h1>Search Countries</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        data={filteredCountries}
        renderResults={(data) => <Countries countries={data} />}
      />
      <Modal />
    </FlagsContainer>
  );
};

export default CountriesSearchPage;