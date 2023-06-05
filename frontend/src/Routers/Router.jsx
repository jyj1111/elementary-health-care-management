import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import MainPage from "../pages/Main/MainPage";
import MyInfoPage from "../pages/MyInfo/MyInfoPage";
function Router() {
  return (
    <Routes>
      <Route index element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/">
        <Route index element={<MainPage />}></Route>
        <Route path=":userId" element={<MyInfoPage />}></Route>
      </Route>
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  );
}

export default Router;
