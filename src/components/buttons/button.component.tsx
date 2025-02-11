import { FC, ButtonHTMLAttributes } from "react";
import { FaArrowRight, FaPlusCircle } from "react-icons/fa";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  BurgerMenuButton,
  SearchButton,
  AkceptButton,
  EditButton,
  ArrowButton,
  AddButton,
} from "./buttons.styles";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
  burger = "burger-menu",
  search = "search",
  akcept = "akcept",
  edit = "edit",
  arrow = "arrow",
  add = "add",
}

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  icon?: string;
  open?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const getButton = (
  buttonType: BUTTON_TYPE_CLASSES = BUTTON_TYPE_CLASSES.base,
):
  | typeof BaseButton
  | typeof GoogleSignInButton
  | typeof InvertedButton
  | typeof BurgerMenuButton
  | typeof SearchButton
  | typeof AkceptButton
  | typeof EditButton
  | typeof ArrowButton
  | typeof AddButton => {
  return {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.burger]: BurgerMenuButton,
    [BUTTON_TYPE_CLASSES.search]: SearchButton,
    [BUTTON_TYPE_CLASSES.akcept]: AkceptButton,
    [BUTTON_TYPE_CLASSES.edit]: EditButton,
    [BUTTON_TYPE_CLASSES.arrow]: ArrowButton,
    [BUTTON_TYPE_CLASSES.add]: AddButton,
  }[buttonType];
};

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  icon,
  open,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps}>
      {buttonType === BUTTON_TYPE_CLASSES.google && (
        <img src={icon} alt="Google Icon" />
      )}
      {buttonType === BUTTON_TYPE_CLASSES.akcept && (
        <span className="icon">✓</span>
      )}
      {buttonType === BUTTON_TYPE_CLASSES.edit && (
        <img src={icon} alt="edit icon" />
      )}
      {buttonType === BUTTON_TYPE_CLASSES.arrow && (
        <FaArrowRight size={20} color="green" />
      )}
      {buttonType === BUTTON_TYPE_CLASSES.add && <FaPlusCircle />}
      {children}
    </CustomButton>
  );
};

export default Button;
