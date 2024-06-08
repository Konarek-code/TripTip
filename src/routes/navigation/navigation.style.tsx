import styled from "styled-components";
import { Link } from "react-router-dom";

interface NavigationContainerProps {
  scroll: boolean;
}
export const NavigationContainer = styled.div<NavigationContainerProps>`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${(props) =>
    props.scroll ? "0 4px 8px rgba(0, 0, 0, 0.3)" : " 0px 2px 0px white;"};

  @media only screen and (max-width: 800px) {
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  height: 100%;
  img {
    height: 70px;
  }
`;

export const NavLinks = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    margin-left: 200px;
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: color 0.3s;

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
    transform: scaleX(1);
    transform-origin: left;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
