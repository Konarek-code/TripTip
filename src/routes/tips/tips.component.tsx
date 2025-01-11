import { useSelector, useDispatch } from "react-redux";
import { selectActiveCard } from "../../store/category-cards/category-cards.selector";
import { setActiveCard } from "../../store/category-cards/category-cards.reducer";
import {
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
import { AppDispatch } from "../../store/store";

const TipsPage: React.FC = () => {
  const dispatch = useDispatch();
  const activeCard = useSelector(selectActiveCard);
  const [isAnimating, setIsAnimating] = useState(false); // Nowy stan do kontrolowania animacji

  const handleCardClick = (cardName: string): void => {
    if (activeCard === cardName) {
      // Jeśli kliknięto już aktywną kartę, zresetuj stan
      dispatch(setActiveCard(null));
    } else {
      // Ustawiamy aktywną kartę i uruchamiamy animację
      dispatch(setActiveCard(cardName));
      setIsAnimating(true); // Rozpoczynamy animację
    }
  };

  const handleBack = (): ReturnType<AppDispatch> => {
    return dispatch(setActiveCard(null));
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
          {[
            "Checklist",
            "YouTubeGuides",
            "TravelBooks",
            "SafetyTips",
            "BestTravelBlogs",
            "Insurance",
          ].map((cardName) => (
            <CategoryCard
              key={cardName}
              className={activeCard === cardName ? "active" : ""}
              onClick={() => {
                handleCardClick(cardName);
              }}
            >
              {cardName === "Checklist" && <Checklist />}
              {cardName === "YouTubeGuides" && <YouTubeGuides />}
              {cardName === "TravelBooks" && <TravelBooks />}
              {cardName === "SafetyTips" && <SafetyTips />}
              {cardName === "BestTravelBlogs" && <BestTravelBlogs />}
              {cardName === "Insurance" && <Insurance />}
            </CategoryCard>
          ))}
        </CategoriesWrapper>
      </section>
      {activeCard !== null && !isAnimating && (
        <FullScreenCard>
          <h2>Pełny ekran: {activeCard}</h2>
          <button onClick={handleBack}>Wróć</button>
        </FullScreenCard>
      )}
    </PageWrapper>
  );
};

export default TipsPage;
