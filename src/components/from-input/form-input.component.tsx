import {
  InputHTMLAttributes,
  FC,
  forwardRef,
  useState,
  useCallback,
} from "react";
import { FormInputLabel, Input, Group } from "./form-input.style";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = forwardRef<
  HTMLInputElement,
  FormInputProps
>(
  (
    { label, onFocus, onBlur, value, defaultValue, onChange, ...otherProps },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(() => {
      if (typeof value === "string") return value;
      if (typeof defaultValue === "string") return defaultValue;
      return "";
    });

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        onFocus?.(e);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        onBlur?.(e);
      },
      [onBlur],
    );

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        onChange?.(e);
      },
      [onChange],
    );

    const currentValue = typeof value === "string" ? value : inputValue;

    const shouldShrink = isFocused || currentValue.trim() !== "";

    return (
      <Group>
        <Input
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
          defaultValue={defaultValue}
          {...otherProps}
        />
        {label !== "" && (
          <FormInputLabel shrink={shouldShrink}>{label}</FormInputLabel>
        )}
      </Group>
    );
  },
);

FormInput.displayName = "FormInput";
export default FormInput;
