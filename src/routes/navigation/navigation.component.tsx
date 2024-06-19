import { Fragment, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/buttons/button.component";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
  SignNavLinks,
  Imagebutton,
  CardNavLink,
} from "./navigation.style";
import CarLogo from "../../assets/CarLogo.png";
import LogIcon from "../../assets/Logicon.png";
import { selectCurrentState } from "../../store/burger/burger.selector";
import { setCurrentState } from "../../store/burger/burger.reducer";
import { RootState } from "../../store/store";
import Card from "../../components/card/card.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation: React.FC = () => {
  const [scroll, setScroll] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const currentBurgerState = useSelector((state: RootState) =>
    selectCurrentState(state),
  );

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      setScroll(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBurgerClick = (): void => {
    dispatch(setCurrentState(!currentBurgerState));
  };

  const handleCloseCard = (): void => {
    dispatch(setCurrentState(false));
  };

  return (
    <Fragment>
      <NavigationContainer scroll={scroll}>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.burger}
          onClick={handleBurgerClick}
        >
          <div />
          <div />
          <div />
        </Button>
        <LogoContainer to="/">
          <img src={CarLogo} alt="Car Logo" />
          <h2>Trip Tip</h2>
        </LogoContainer>
        <Imagebutton to="userForms">
          <img src={LogIcon} alt="Log Icon" />
        </Imagebutton>
        <NavLinks>
          <NavLink to="trip">Your Trip</NavLink>
          <NavLink to="func2">Func2</NavLink>
          <NavLink to="func1">Func3</NavLink>
          {currentUser ? (
            <SignNavLinks to="/" onClick={signOutUser}>
              Sign Out
            </SignNavLinks>
          ) : (
            <SignNavLinks to="userForms">Sign In</SignNavLinks>
          )}
        </NavLinks>
      </NavigationContainer>
      <Card open={currentBurgerState} onClose={handleCloseCard}>
        <CardNavLink to="trip">Your Trip </CardNavLink>
        <CardNavLink to="trip">Your Trip </CardNavLink>
        <CardNavLink to="trip">Your Trip </CardNavLink>
      </Card>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
