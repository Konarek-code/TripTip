import { Outlet } from "react-router-dom";
import {
  HeadContainer,
  HomeContainer,
  Title,
  CenterSideHeader,
  SubTitle,
  ImageHome,
} from "./home.style";
import GlobeHeader from "../../assets/GlobeHeader.png";
import * as React from "react";
import Footer from "../../components/footer/footer.component";
import SearchBlcokComp from "../../components/searchblock/search-block.component";

import { useDispatch } from "react-redux";
import { setShowSearchInNav } from "../../store/scroll/scroll.reducer";
import { AppDispatch } from "../../store/store";
import HomeContent from "../../components/homeConent/homeContent";
import FooterAction from "../../components/footerAction/footerAction";

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
          <ImageHome src={GlobeHeader} alt="Globe Header" />
          <CenterSideHeader ref={searchBlockRef}>
            <Title> Discover The World</Title>
            <SubTitle> Explore the beauty of our planet</SubTitle>
            <SearchBlcokComp></SearchBlcokComp>
          </CenterSideHeader>
        </HeadContainer>
        <HomeContent continent={"Europe"} />
        <Outlet />
      </HomeContainer>
      <FooterAction />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
