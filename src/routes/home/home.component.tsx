import { Outlet } from "react-router-dom";
import { HomeContainer, ImageContainer } from "./home.style";
import Suitcase from "../../assets/Suitcase.png";
import * as React from "react";
import Footer from "../../components/footer/footer.component";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <HomeContainer>
        <ImageContainer to="/map">
          <img src={Suitcase} alt="suitcase" />
          <h3>Start your journey</h3>
        </ImageContainer>
        <h3> lorme ipsum </h3>
        <h3> lorme ipsum </h3>
        <h3> lorme ipsum </h3>
        <h3> lorme ipsum </h3>
        <h3> lorme ipsum </h3>
        <h3> lorme ipsum </h3>
        <h3> lorme ipsum </h3>
        <h3> lorme ipsum </h3>
        <h3> lorme ipsum </h3>
        <h3> lorme ipsum </h3>
        <h3> lorme ipsum </h3>

        <Outlet />
      </HomeContainer>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
