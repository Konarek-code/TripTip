/* eslint-disable react/prop-types */
import {
  CardContainer,
  CardContent,
  CancelButton,
  NavLink,
} from "./card.style";
import { FiX, FiHome, FiMap, FiCompass, FiCheckCircle } from "react-icons/fi";

type CardProps = {
  open: boolean;
  onClose: () => void;
};

const Card: React.FC<CardProps> = ({ open, onClose }) => {
  return (
    <CardContainer open={open}>
      <CardContent>
        <CancelButton onClick={onClose} aria-label="close card">
          <FiX />
        </CancelButton>

        <NavLink to="/" onClick={onClose}>
          <FiHome />
          Strona główna
        </NavLink>
        <NavLink to="/FindBy" onClick={onClose}>
          <FiMap />
          FindBy
        </NavLink>
        <NavLink to="/TipsPage" onClick={onClose}>
          <FiCompass />
          Tips
        </NavLink>
        <NavLink to="/Been" onClick={onClose}>
          <FiCheckCircle />
          Been
        </NavLink>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
