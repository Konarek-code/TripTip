/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button, { BUTTON_TYPE_CLASSES } from "../buttons/button.component";
import FormInput from "../from-input/form-input.component";
import googleicon from "../../assets/googleicon.png";
import RoadImage from "../../assets/RoadImage.jpg";
import {
  FormContainer,
  LabelTitle,
  SingupLinker,
  ImageRightSide,
  Container,
  Separator,
} from "./sign-in-form.style";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { InitCountriesFromFirestore } from "../../utils/countries/countries.utils";

type SingInFormProps = {
  toggleForm: () => void;
};

type Formfields = {
  email: string;
  password: string;
};

const SingInForm: React.FC<SingInFormProps> = ({ toggleForm }): JSX.Element => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<Formfields>({
    shouldUseNativeValidation: true,
  });

  const signInWithGoogle = async (): Promise<void> => {
    await signInWithGooglePopup();
    console.log(currentUser);
  };

  const onSubmit: SubmitHandler<Formfields> = async (data: Formfields) => {
    const { email, password } = data;

    try {
      const userCredential = await signInAuthUserWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;
      await InitCountriesFromFirestore(user.uid, dispatch);
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };
  const currentUser = useSelector(selectCurrentUser);
  const handleGoogleSignIn = async () => {
    await signInWithGoogle().catch((error) => console.log(error));
    console.log(currentUser);
  };

  return (
    <Container>
      <FormContainer>
        <LabelTitle>Welcome traveler</LabelTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            {...register("email", { maxLength: 20 })}
            label="Email"
            type="email"
            required
          />
          <FormInput
            {...register("password", { maxLength: 20 })}
            label="Password"
            type="password"
            required
          />
          <Button type="submit">Sign In with Email</Button>
          <Separator>
            <span>OR</span>
          </Separator>
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
      </FormContainer>
      <ImageRightSide src={RoadImage} />
    </Container>
  );
};

export default SingInForm;
