import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SingInForm from "../../components/sign-in-form/sign-in-form.component";
import SingUpForm from "../../components/sing-up-form/sign-up-form.component";
import { selectCurrentForm } from "../../store/forms/forms.selector";
import { setCurrentForm } from "../../store/forms/forms.reducer";

type UserFormsProps = {
  formType?: "signIn" | "signUp";
};

const UserForms: React.FC<UserFormsProps> = () => {
  const dispatch = useDispatch();
  const currentForm = useSelector(selectCurrentForm);

  const toggleForm = (): void => {
    dispatch(setCurrentForm(currentForm === "signIn" ? "signUp" : "signIn"));
  };

  return (
    <div>
      {currentForm === "signIn" ? (
        <SingInForm toggleForm={toggleForm} />
      ) : (
        <SingUpForm toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default UserForms;
