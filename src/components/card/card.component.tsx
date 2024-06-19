/* eslint-disable react/prop-types */
import { ReactNode } from "react";
import { CardContainer, CardContent, CancelButton } from "./card.style";
type CardProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Card: React.FC<CardProps> = ({ open, onClose, children }) => (
  <CardContainer open={open}>
    <CardContent>
      <CancelButton onClick={onClose}>&#10005;</CancelButton>
      {children}
    </CardContent>
  </CardContainer>
);

export default Card;
