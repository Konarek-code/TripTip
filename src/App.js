/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/*  eslint-disable @typescript-eslint/no-floating-promises  */
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.reducer";
import UserForms from "./routes/sign-In/userForms.component";
import Findby from "./routes/find-by/find_by.component";
import Been from "./routes/been/been.component";
import TipsPage from "./routes/tips/tips.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const pickedUser =
        user && (({ accessToken, email }) => ({ accessToken, email }))(user);

      console.log(setCurrentUser(pickedUser));
      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="userForms" element={<UserForms />} />
        <Route path="FindBy" element={<Findby />} />
        <Route path="Been" element={<Been />} />
        <Route path="TipsPage" element={<TipsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
