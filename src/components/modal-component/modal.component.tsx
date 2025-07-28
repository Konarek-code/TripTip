import { FC, useEffect, useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  InformationContent,
  ModalHeader,
  CloseButton,
  ModalBody,
  FlagImage,
  Divider,
  ActionContainer,
  ActionButton,
  IconContainer,
  Icon,
} from "./modal.component.style";
import { fetchWikipediaSummary } from "../../utils/fetch_wikipedia/fetch_wikipedia.utils";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentFlag,
  selectModalIsOpen,
} from "../../store/modal/modal.selector";
import { closeModal } from "../../store/modal/modal.reducer";

import tripadvisor from "../../assets/tripadvisor.png";
import booking from "../../assets/booking.png";
import yelp from "../../assets/yelp.png";
import { addFavouriteItem } from "../../store/favourite/favourite.reducer";

const Modal: FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectModalIsOpen);
  const selectedCountry = useSelector(selectCurrentFlag);
  const [summary, setSummary] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleClose = (): void => {
    dispatch(closeModal());
  };

  useEffect(() => {
    if (selectedCountry != null && isOpen) {
      setError(null);

      fetchWikipediaSummary(selectedCountry.country)
        .then((data) => {
          setSummary(data);
        })
        .catch(() => {
          setError("Failed to load summary.");
        });
    }
  }, [selectedCountry, isOpen]);

  if (!isOpen || selectedCountry == null) {
    return null;
  }
  const handleAddToFavourite = (): void => {
    if (selectedCountry != null) {
      const newFavourite = {
        id: selectedCountry.id,
        country: selectedCountry.country,
        flag: selectedCountry.flag,
      };
      dispatch(addFavouriteItem(newFavourite));
    }
  };

  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>
          <FlagImage
            src={selectedCountry.flag}
            alt={`Flag of ${selectedCountry.country}`}
          />
          <CloseButton onClick={handleClose}>&#x2190;</CloseButton>
        </ModalHeader>
        <ModalBody>
          <InformationContent>
            {error !== null && error !== undefined ? (
              <p>{error}</p>
            ) : summary !== null && summary !== undefined && summary !== "" ? (
              <p>{summary}</p>
            ) : (
              <p>Loading summary...</p>
            )}
            <strong>Capital:</strong> <span> {selectedCountry.capital}</span>
            <br />
            <strong>Population: </strong>
            <span>
              {new Intl.NumberFormat().format(selectedCountry.population)}
            </span>
            <br />
            <strong>Region:</strong>
            <span> {selectedCountry.region}</span>
          </InformationContent>
          <Divider />
          <ActionContainer>
            <ActionButton onClick={handleAddToFavourite}>
              Add to Favorite
            </ActionButton>
            <strong> or check on </strong>
            <IconContainer>
              <Icon
                onClick={() =>
                  window.open(
                    `https://www.tripadvisor.com/Search?q=${encodeURIComponent(
                      selectedCountry.country,
                    )}`,
                    "_blank",
                  )
                }
                src={tripadvisor}
                alt="TripAdvisor"
              />
              <Icon
                onClick={() =>
                  window.open(
                    `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(
                      selectedCountry.country,
                    )}`,
                    "_blank",
                  )
                }
                src={booking}
                alt="Booking.com"
              />

              <Icon
                onClick={() =>
                  window.open(
                    `https://www.yelp.com/search?find_desc=${encodeURIComponent(
                      selectedCountry.country,
                    )}`,
                    "_blank",
                  )
                }
                src={yelp}
                alt="Yelp"
              />
            </IconContainer>
          </ActionContainer>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
