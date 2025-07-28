import React, { useState } from "react";
import SearchBar from "../searchbar/searchbar";
import Countries from "../countries/countries.component";
import Modal from "../modal-component/modal.component";
import { FlagsContainer } from "./flags.style";
import { countriesData } from "../../data/countries.Data";

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
    const matchesSearch =
      searchTerm !== ""
        ? country.country.toLowerCase().startsWith(searchTerm.toLowerCase())
        : true;

    const matchesRegion =
      selectedRegion !== null && selectedRegion !== undefined
        ? country.regionshortcut.toLocaleLowerCase() === selectedRegion
        : true;

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
