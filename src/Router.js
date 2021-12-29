import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInPage, SignUpPage, MainPage, WritePage } from "./Pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
