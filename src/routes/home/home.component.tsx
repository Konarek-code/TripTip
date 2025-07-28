import { Outlet } from "react-router-dom";
import {
  HeadContainer,
  HomeContainer,
  Title,
  CenterSideHeader,
  SubTitle,
  GlobeContainer,
} from "./home.style";
import * as React from "react";
import Footer from "../../components/footer/footer.component";
import SearchBlcokComp from "../../components/searchblock/search-block.component";

import { useDispatch } from "react-redux";
import { setShowSearchInNav } from "../../store/scroll/scroll.reducer";
import { AppDispatch } from "../../store/store";
import HomeContent from "../../components/homeConent/homeContent";
import HistoryTimeline from "../../components/history/history.component";
import EuropeAtAGlance from "../../components/europeAtGlance/glanceCard.component";
import RotatingGlobe from "../../components/globe/RotatingGlobe";

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const searchBlockRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = (): void => {
      dispatch(setShowSearchInNav(window.scrollY > 300));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  return (
    <React.Fragment>
      <HomeContainer>
        <HeadContainer>
          <GlobeContainer>
            <RotatingGlobe />
          </GlobeContainer>
          <CenterSideHeader ref={searchBlockRef}>
            <Title>
              {" "}
              Discover The World
              <SubTitle>
                Explore new destinations and embark on an unforgettable journey
              </SubTitle>
            </Title>
            <SearchBlcokComp></SearchBlcokComp>
          </CenterSideHeader>
        </HeadContainer>
        <HistoryTimeline />
        <HomeContent />
        <EuropeAtAGlance />
        <Outlet />
      </HomeContainer>

      <Footer />
    </React.Fragment>
  );
};

export default Home;
