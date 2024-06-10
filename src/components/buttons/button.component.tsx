import { FC, ButtonHTMLAttributes } from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./buttons.styles";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
}

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  icon?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const getButton = (
  buttonType: BUTTON_TYPE_CLASSES = BUTTON_TYPE_CLASSES.base,
): typeof BaseButton | typeof GoogleSignInButton | typeof InvertedButton => {
  return {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType];
};

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  icon,
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
