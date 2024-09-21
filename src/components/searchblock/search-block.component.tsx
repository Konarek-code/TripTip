import React, { Fragment, useState } from "react";
import { SearchBlockContainer, SearchBlock } from "./search-block";
import Button, { BUTTON_TYPE_CLASSES } from "../buttons/button.component";
import ContinentCard from "../continents-card/continents-card.component";

const SearchBlcokComp: React.FC = () => {
  const [showContinentCard, setShowContinentCard] = useState(false);

  const handleClick: () => void = () => {
    setShowContinentCard((prevState) => !prevState);
  };
  return (
    <Fragment>
      <SearchBlockContainer>
        <SearchBlock>
          <h2> chose the continent</h2>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.search}
            type="button"
            onClick={handleClick}
          >
            {showContinentCard ? "Hide " : "Search"}
          </Button>
        </SearchBlock>
      </SearchBlockContainer>
      <ContinentCard isVisible={showContinentCard} />
    </Fragment>
  );
};

export default SearchBlcokComp;
