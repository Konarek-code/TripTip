import React, { Fragment } from "react";
import { SearchBarContainer, SearchBarInput } from "./searchbar.style";

interface SearchBarProps<T> {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  data: T[]; // Generic data, e.g., list of countries
  renderResults: (filteredData: T[]) => JSX.Element; // Function to render filtered results
}

const SearchBar = <T,>({
  searchTerm,
  onSearchChange,
  placeholder = "Search...",
  data,
  renderResults,
}: SearchBarProps<T>): JSX.Element => {
  return (
    <Fragment>
      <SearchBarContainer>
        <SearchBarInput
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={onSearchChange}
        />
      </SearchBarContainer>
      {renderResults(data)}
    </Fragment>
  );
};

export default SearchBar;
