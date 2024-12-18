import { useDispatch, useSelector } from "react-redux";

import {
  selectFavouriteItems,
  selectCartIsOpen,
} from "../../store/favourite/favourite.selector";
import { setIsCartOpen } from "../../store/favourite/favourite.reducer";

import { ReactComponent as ShoppingIcon } from "../../assets/FormsIcon.svg";

import { CartIconContainer, ItemCount } from "./favorite-icon.component.style";
import { FC } from "react";
import FavouriteDropdown from "../favourtie-dropdown/favourite-dropdow.component";

const FavouriteIcon: FC = () => {
  const dispatch = useDispatch();

  const favouriteItems = useSelector(selectFavouriteItems);
  const isCartOpen = useSelector(selectCartIsOpen);

  const toggleIsCartOpen = (): void => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <div>
      <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon className="shopping-icon" />
        <ItemCount>{favouriteItems.length}</ItemCount> {/* Show item count */}
      </CartIconContainer>
      {isCartOpen && <FavouriteDropdown />}{" "}
      {/* Conditionally render dropdown */}
    </div>
  );
};

export default FavouriteIcon;
