import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../from-input/form-input.component";
import RoadImage from "../../assets/RoadImage.jpg";
import Button from "../buttons/button.component";
import {
  FormContainer,
  LabelTitle,
  SingupLinker,
  Container,
  ImageRightSide,
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
    <Container>
      <FormContainer>
        <LabelTitle>Become a traveller</LabelTitle>
        <form>
          <FormInput label="Name" type="name" required />
          <FormInput
            {...register("email")}
            label="Email"
            type="email"
            required
          />
          <FormInput label="Password" type="password" required />
          <Button type="submit">Sign Up</Button>
        </form>
        <SingupLinker onClick={toggleForm}>
          <h3>Already have an account?</h3>
        </SingupLinker>
      </FormContainer>
      <ImageRightSide src={RoadImage} />
    </Container>
  );
};

export default SingUpForm;
