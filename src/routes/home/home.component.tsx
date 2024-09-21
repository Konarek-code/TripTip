import { Outlet } from "react-router-dom";
import {
  HeadContainer,
  HomeContainer,
  ImageContainer,
  ImageHome,
  InformationContainer,
  SearchBarOverlay,
} from "./home.style";
import MapHome from "../../assets/MapHome.jpg";
import BestCard from "../../components/best-choice-card/bestcard.component";
import Suitcase from "../../assets/Suitcase.png";
import Opinion from "../../assets/opinion.png";
import Plane from "../../assets/plane.png";
import * as React from "react";
import Footer from "../../components/footer/footer.component";
import SearchBlcokComp from "../../components/searchblock/search-block.component";
import RecommendedCard from "../../components/Recommended-card/recommended-card.component";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <HomeContainer>
        <HeadContainer>
          <h3> Which continent should we go</h3>
          <ImageHome src={MapHome} alt="map" />
          <SearchBarOverlay>
            <SearchBlcokComp></SearchBlcokComp>
          </SearchBarOverlay>
        </HeadContainer>
        <RecommendedCard />
        <InformationContainer>
          <h3> Trending Destinations - World</h3>
          <h2>
            {" "}
            From lesser-known cities to new escapes, these places are on the up
            and up. You heard it here first. The Travelers’ Choice Awards Best
            of the Best title celebrates the highest level of excellence in
            travel. It’s awarded to those who receive a high volume of
            above-and-beyond reviews and opinions from the Tripadvisor community
            over a 12-month period. Out of our 8 million listings, fewer than 1%
            achieve this milestone.
          </h2>
        </InformationContainer>
        <hr />
        <BestCard />
        <ImageContainer>
          <p>
            <h2> You dont have a clue where to go?</h2>
            <span>
              Click on the suitcase and find best prices of this month
            </span>
            <img src={Suitcase} alt="suitcase" />
          </p>
          <p>
            <h2> Maybe you want chat a plane?</h2>
            <span>Click on the plane and see what’s flying around</span>
            <img src={Plane} alt="suitcase" />
          </p>
          <p>
            <h2> Chek the best opinions </h2>
            <span>It’s good to know other people’s opinions </span>
            <img src={Opinion} alt="suitcase" />
          </p>
        </ImageContainer>
        <Outlet />
      </HomeContainer>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
