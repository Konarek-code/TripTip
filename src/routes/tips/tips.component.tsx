import { useSelector, useDispatch } from "react-redux";
import { selectActiveCard } from "../../store/category-cards/category-cards.selector";
import { setActiveCard } from "../../store/category-cards/category-cards.reducer";
import {
  CancelButton,
  CategoriesWrapper,
  CategoryCard,
  FullScreenCard,
  Header,
  PageWrapper,
  StyledImage,
} from "./tips.styles";
import { useState, useEffect } from "react";
import Checklist from "../../components/checklist/checklist.component";
import YouTubeGuides from "../../components/ytGuides/ytGuides.component";
import TravelBooks from "../../components/travel-books/travel-books.component";
import SafetyTips from "../../components/safety-tips/safety-tips.component";
import Insurance from "../../components/insurance/insurance.component";
import BestTravelBlogs from "../../components/best-blogs/best-blogs.component";
import TipsSticer from "../../assets/Tips_2.png";
import Blog from "../../assets/Blogs.jpg";
import Books from "../../assets/books.jpg";
import Yt from "../../assets/yt.jpg";
import Insuranceimg from "../../assets/Insurance.jpg";
import Checklistimg from "../../assets/checklist.jpg";
import Safety from "../../assets/Safety.jpg";
import { AppDispatch } from "../../store/store";

const TipsPage: React.FC = () => {
  const dispatch = useDispatch();
  const activeCard = useSelector(selectActiveCard);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardClick = (cardName: string): void => {
    if (activeCard === cardName) {
      dispatch(setActiveCard(null));
    } else {
      dispatch(setActiveCard(cardName));
      setIsAnimating(true);
    }
  };

  const handleBack = (): ReturnType<AppDispatch> => {
    const result = dispatch(setActiveCard(null));
    return result;
  };

  useEffect(() => {
    if (activeCard !== null && isAnimating) {
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  }, [activeCard, isAnimating]);

  return (
    <PageWrapper>
      <Header>
        <StyledImage src={TipsSticer} alt="boy" />
        <h1>Podróżnicze Porady i Narzędzia</h1>
        <p>Twoje źródło inspiracji, wiedzy i praktycznych wskazówek.</p>
      </Header>

      <section>
        <h2>Sprawdź nasze kategorie</h2>
        <CategoriesWrapper>
          <CategoryCard
            imageUrl={Blog}
            className={activeCard === "BestTravelBlogs" ? "active" : ""}
            isLarge
            onClick={() => {
              handleCardClick("BestTravelBlogs");
            }}
            style={{ gridArea: "large-card-1" }}
          >
            <h3> Travel Blogs</h3>
          </CategoryCard>
          <CategoryCard
            imageUrl={Books}
            className={activeCard === "TravelBooks" ? "active" : ""}
            isLarge
            onClick={() => {
              handleCardClick("TravelBooks");
            }}
            style={{ gridArea: "large-card-2" }}
          >
            <h3>Books before trips</h3>
          </CategoryCard>
          {[
            { cardName: "Safety", imageUrl: Safety },
            { cardName: "Checklist", imageUrl: Checklistimg },
            { cardName: "Insurance", imageUrl: Insuranceimg },
            { cardName: "YouTubeGuides", imageUrl: Yt },
          ].map((item, index) => (
            <CategoryCard
              key={item.cardName}
              imageUrl={item.imageUrl}
              className={`small-card-${index + 1} ${activeCard === item.cardName ? "active" : ""}`}
              onClick={() => {
                handleCardClick(item.cardName);
              }}
            >
              <h3>{item.cardName}</h3>
            </CategoryCard>
          ))}
        </CategoriesWrapper>
      </section>
      {activeCard !== null && !isAnimating && (
        <FullScreenCard>
          <CancelButton onClick={handleBack}>&times;</CancelButton>
          {activeCard === "Checklist" && <Checklist />}
          {activeCard === "YouTubeGuides" && <YouTubeGuides />}
          {activeCard === "TravelBooks" && <TravelBooks />}
          {activeCard === "Safety" && <SafetyTips />}
          {activeCard === "BestTravelBlogs" && <BestTravelBlogs />}
          {activeCard === "Insurance" && <Insurance />}
        </FullScreenCard>
      )}
    </PageWrapper>
  );
};

export default TipsPage;
