/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button, { BUTTON_TYPE_CLASSES } from "../buttons/button.component";
import FormInput from "../from-input/form-input.component";
import stamp from "../../assets/stamp.png";
import approved from "../../assets/approved_15433170.png";
import Letters from "../../assets/Letters.png";
import googleicon from "../../assets/googleicon.png";
import {
  FormContainer,
  LabelTitle,
  Imagecontainer,
  StampImage,
  LettersImage,
  SingupLinker,
} from "./sign-in-form.style";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

type SingInFormProps = {
  toggleForm: () => void;
};

type Formfields = {
  email: string;
  password: string;
};

const SingInForm: React.FC<SingInFormProps> = ({ toggleForm }): JSX.Element => {
  const { register, handleSubmit } = useForm<Formfields>({
    shouldUseNativeValidation: true,
  });

  const signInWithGoogle = async (): Promise<void> => {
    await signInWithGooglePopup();
  };

  const onSubmit: SubmitHandler<Formfields> = async (data: Formfields) => {
    const { email, password } = data;

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  const handleGoogleSignIn = async () => {
    await signInWithGoogle().catch((error) => console.log(error));
  };

  return (
    <FormContainer>
      <LabelTitle>Welcome traveler</LabelTitle>
      <LettersImage src={Letters} />
      <StampImage src={stamp} alt="airplane icon" />
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      >
        <FormInput {...register("email")} label="Email" type="email" required />
        <FormInput
          {...register("password")}
          label="Password"
          type="password"
          required
        />
        <Button
          buttonType={BUTTON_TYPE_CLASSES.google}
          type="button"
          icon={googleicon}
          onClick={handleGoogleSignIn}
        >
          Sign In with Google
        </Button>
      </form>
      <SingupLinker onClick={toggleForm}>
        <h3>Don&apos;t have an account?</h3>
      </SingupLinker>

      <Imagecontainer src={approved} />
    </FormContainer>
  );
};

export default SingInForm;
