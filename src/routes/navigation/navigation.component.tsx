import { Fragment, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from "./navigation.style";
import CarLogo from "../../assets/CarLogo.png";

const Navigation: React.FC = () => {
  const [scroll, setScroll] = useState(false);

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      setScroll(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <NavigationContainer scroll={scroll}>
        <LogoContainer to="/">
          <img src={CarLogo} alt="Car Logo" />
          <h2>Trip Tip</h2>
        </LogoContainer>
        <NavLinks>
          <NavLink to="SignIn"> Your Trip </NavLink>
          <NavLink to="SignIn"> func1</NavLink>
          <NavLink to="SignIn"> func3</NavLink>
          <NavLink to="userForms"> Sign In</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
