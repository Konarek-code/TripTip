import styled from "styled-components";
import { Link } from "react-router-dom";

interface NavigationContainerProps {
  scroll: boolean;
}
export const NavigationContainer = styled.div<NavigationContainerProps>`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: ${(props) =>
    props.scroll ? "0 4px 8px rgba(0, 0, 0, 0.3)" : " 0px 2px 0px white;"};
`;

export const LogoContainer = styled(Link)`
  display: flex;
  height: 100%;
  margin-right: 90px;
  margin-left: 60px;
  img {
    height: 70px;
  }
  @media only screen and (max-width: 1000px) {
    margin-left: 10px;

    img {
      height: 60px;
    }
    h2 {
      font-size: 15px;
    }
  }
`;

export const NavLinks = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  margin-left: 120px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    margin-left: 0px;
    display: none;
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: color 0.3s;
  border-radius: 20px;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3px;
    background-color: orange;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s ease;
  }

  &:hover::after {
    box-shadow: 5px 5px 5px orange;
    transform: scaleX(1);
    transform-origin: left;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const SignNavLinks = styled(NavLink)`
  min-width: 100px;
  width: auto;
  letter-spacing: 0.5px;
  line-height: 35px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-border-radius: 20px;
  border-radius: 20px;
  -webkit-transition:
    background-color 0.218s,
    border-color 0.218s,
    box-shadow 0.218s;
  transition:
    background-color 0.218s,
    border-color 0.218s,
    box-shadow 0.218s;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid orange;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0;
    background-color: transparent;
    transform: none;
    transform-origin: none;
    transition: none;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Imagebutton = styled(Link)`
  display: none;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  img {
    height: 30px;
  }
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

export const CardNavLink = styled(Link)`
  position: relative;
  text-align: center;
  margin: 10px;
  background: orange;
  font-size: 26px;
  padding: 30px auto;
  text-decoration: none;
  color: black;
  border-radius: 20px;
`;
