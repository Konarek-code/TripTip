// src/routes/tips/tips-page.component.tsx
import { useSelector, useDispatch } from "react-redux";
import { selectActiveCard } from "../../store/category-cards/category-cards.selector";
import { setActiveCard } from "../../store/category-cards/category-cards.reducer";
import {
  CancelButton,
  FullScreenCard,
  Header,
  PageWrapper,
  StyledImage,
} from "./tips.styles";
import { useState, useEffect } from "react";
import YouTubeGuides from "../../components/ytGuides/ytGuides.component";
import TravelBooks from "../../components/travel-books/travel-books.component";
import ChecklistTable from "../../components/checklist-table/ckecklist-table.component";
import BestTravelBlogs from "../../components/best-blogs/best-blogs.component";
import TipsSticer from "../../assets/Tips_2.png";
import { AppDispatch } from "../../store/store";
import TipCards from "../../components/tipCadrs/tipCards.component";

const TipsPage: React.FC = () => {
  const dispatch = useDispatch();
  const activeCard = useSelector(selectActiveCard);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleBack = (): ReturnType<AppDispatch> => {
    const result = dispatch(setActiveCard(null));
    return result;
  };

  useEffect(() => {
    if (activeCard !== null && isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [activeCard, isAnimating]);

  useEffect(() => {
    if (activeCard !== null) setIsAnimating(true);
  }, [activeCard]);

  return (
    <PageWrapper isOnCategoryPage={activeCard !== null}>
      <Header>
        <StyledImage src={TipsSticer} alt="boy" />
        <h1>Travel Tips & Tools</h1>
        <p>Your source of inspiration, knowledge, and practical advice.</p>
      </Header>

      <section>
        <h2>Check Out Our Categories</h2>
        <TipCards />
      </section>

      {activeCard !== null && !isAnimating && (
        <FullScreenCard>
          <CancelButton onClick={handleBack}>&times;</CancelButton>
          {activeCard === "ChecklistTable" && <ChecklistTable />}
          {activeCard === "YouTubeGuides" && <YouTubeGuides />}
          {activeCard === "TravelBooks" && <TravelBooks />}
          {activeCard === "BestTravelBlogs" && <BestTravelBlogs />}
        </FullScreenCard>
      )}
    </PageWrapper>
  );
};

export default TipsPage;
