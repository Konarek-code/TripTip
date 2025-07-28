import React from "react";
import {
  Container,
  SearchBarContainer,
  SearchBarInput,
} from "./searchbar.style";

interface SearchBarProps<T> {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  data: T[];
  renderResults: (filteredData: T[]) => JSX.Element;
}

const SearchBar = <T,>({
  searchTerm,
  onSearchChange,
  placeholder = "Search...",
  data,
  renderResults,
}: SearchBarProps<T>): JSX.Element => {
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const value = event.target.value;
    const sanitizedValue = value.replace(/[^a-zA-Z\s]/g, "");
    onSearchChange({
      ...event,
      target: { ...event.target, value: sanitizedValue },
    });
  };

  return (
    <Container>
      <SearchBarContainer>
        <SearchBarInput
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleInputChange}
        />
      </SearchBarContainer>
      {renderResults(data)}
    </Container>
  );
};

export default SearchBar;
