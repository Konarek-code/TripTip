import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../buttons/button.component";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  ItemRow,
} from "./favourite-dropdown.style";
import { selectFavouriteItems } from "../../store/favourite/favourite.selector";
import {
  removeFavouriteItem,
  FavouriteItem,
} from "../../store/favourite/favourite.reducer";
import { countriesData, CountriesData } from "../countriesItems/countries.Data";

// Map the favourite items to countries data based on id
const mapFavouriteToCountriesData = (
  favouriteItems: FavouriteItem[],
): CountriesData[] => {
  return favouriteItems
    .map((item) =>
      countriesData.find((country) => country.country === item.country),
    )
    .filter((item): item is CountriesData => item !== undefined);
};

const FavouriteDropdown = (): JSX.Element => {
  const dispatch = useDispatch();
  const favouriteItems = useSelector(selectFavouriteItems);
  const navigate = useNavigate();

  const favouriteCountries = mapFavouriteToCountriesData(favouriteItems);

  const goToCheckoutHandler = (): void => {
    navigate("/checkout");
  };

  const handleDelete = (id: string): void => {
    dispatch(removeFavouriteItem(id));
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {favouriteCountries.length > 0 ? (
          favouriteCountries.map((item) => (
            <ItemRow key={item.id}>
              <img src={item.flag} alt={item.country} />
              <span>{item.country}</span>
              <button
                onClick={() => {
                  handleDelete(item.id.toString());
                }}
              >
                Delete
              </button>
            </ItemRow>
          ))
        ) : (
          <EmptyMessage>Your favorites list is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default FavouriteDropdown;
