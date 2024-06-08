/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Map from "./routes/map/map.component";
import UserForms from "./routes/sign-In/userForms.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="map" element={<Map />} />
        <Route path="userForms" element={<UserForms />} />
      </Route>
    </Routes>
  );
};

export default App;
