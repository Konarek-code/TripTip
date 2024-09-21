/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { InputHTMLAttributes, FC, forwardRef } from "react";
import { FormInputLabel, Input, Group } from "./form-input.style";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = forwardRef<
  HTMLInputElement,
  FormInputProps
>(({ label, ...otherProps }, ref) => (
  <Group>
    <Input ref={ref} {...otherProps} />
    {label && (
      <FormInputLabel
        shrink={Boolean(
          otherProps.value &&
            typeof otherProps.value === "string" &&
            otherProps.value.length,
        )}
      >
        {label}
      </FormInputLabel>
    )}
  </Group>
));
FormInput.displayName = "FormInput";
export default FormInput;
