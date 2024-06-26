import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../from-input/form-input.component";
import stamp from "../../assets/stamp.png";
import approved from "../../assets/approved_15433170.png";
import Letters from "../../assets/Letters.png";
import Button from "../buttons/button.component";
import {
  FormContainer,
  LabelTitle,
  Imagecontainer,
  StampImage,
  LettersImage,
  SingupLinker,
} from "./sign-up-form";

type FormFields = {
  email: string;
  password: string;
};

type SingUpFormProps = {
  toggleForm: () => void;
};

const SingUpForm: React.FC<SingUpFormProps> = ({ toggleForm }): JSX.Element => {
  const { register } = useForm<FormFields>({
    shouldUseNativeValidation: true,
  });

  return (
    <FormContainer>
      <LabelTitle>Become a traveller</LabelTitle>
      <LettersImage src={Letters} />
      <StampImage src={stamp} alt="airplane icon" />
      <form>
        <FormInput label="Name" type="name" required />
        <FormInput {...register("email")} label="Email" type="email" required />
        <FormInput label="Password" type="password" required />
        <Button type="submit">Sign Up</Button>
      </form>
      <SingupLinker onClick={toggleForm}>
        <h3>Already have an account?</h3>
      </SingupLinker>
      <Imagecontainer src={approved} />
    </FormContainer>
  );
};

export default SingUpForm;
