// src/components/tip-cards/tip-cards.component.tsx
import { useSelector, useDispatch } from "react-redux";
import { selectActiveCard } from "../../store/category-cards/category-cards.selector";
import { setActiveCard } from "../../store/category-cards/category-cards.reducer";
import { CategoryCard, CategoriesWrapper } from "./tipCards.style";
import { tipsCardsData } from "../../data/cardsTip";

const TipCards = (): JSX.Element => {
  const dispatch = useDispatch();
  const activeCard = useSelector(selectActiveCard);

  const handleCardClick = (cardName: string): void => {
    if (activeCard === cardName) {
      dispatch(setActiveCard(null));
    } else {
      dispatch(setActiveCard(cardName));
    }
  };

  return (
    <CategoriesWrapper>
      {tipsCardsData.map(({ cardName, imageUrl, title }) => (
        <CategoryCard
          key={cardName}
          imageUrl={imageUrl}
          onClick={() => {
            handleCardClick(cardName);
          }}
          className={activeCard === cardName ? "active" : ""}
        >
          <h3>{title}</h3>
        </CategoryCard>
      ))}
    </CategoriesWrapper>
  );
};

export default TipCards;
