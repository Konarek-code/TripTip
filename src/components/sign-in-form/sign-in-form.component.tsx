import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../from-input/form-input.component";
import stamp from "../../assets/stamp.png";
import approved from "../../assets/approved_15433170.png";
import Letters from "../../assets/Letters.png";
import {
  FormContainer,
  LabelTitle,
  Imagecontainer,
  StampImage,
  LettersImage,
  SingupLinker,
} from "./sign-in-form.style";

type SingInFormProps = {
  toggleForm: () => void;
};

type Formfields = {
  email: string;
  password: string;
};
const SingInForm: React.FC<SingInFormProps> = ({ toggleForm }): JSX.Element => {
  const { register } = useForm<Formfields>({
    shouldUseNativeValidation: true,
  });

  return (
    <FormContainer>
      <LabelTitle>Welcome traverel</LabelTitle>
      <LettersImage src={Letters} />
      <StampImage src={stamp} alt="airplane icon" />
      <form>
        <FormInput {...register("email")} label="Email" type="email" required />
        <FormInput label="Password" type="password" required />
      </form>
      <SingupLinker onClick={toggleForm}>
        <h3>Already have an account?</h3>
      </SingupLinker>
      <button type="submit">Sing In</button>
      <Imagecontainer src={approved} />
    </FormContainer>
  );
};

export default SingInForm;
