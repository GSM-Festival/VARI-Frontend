import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./Pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
