import { FC, ButtonHTMLAttributes } from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  BurgerMenuButton,
} from "./buttons.styles";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
  burger = "burger-menu",
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
  | typeof BurgerMenuButton => {
  return {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.burger]: BurgerMenuButton,
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
      {children}
    </CustomButton>
  );
};

export default Button;
