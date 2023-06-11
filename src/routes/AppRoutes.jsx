import { Routes, Route } from "react-router-dom";
import { Authentication } from "../pages/authentication/Authentication";
import { Login } from "../pages/authentication/formComponents/Login";
import { Signup } from "../pages/authentication/formComponents/Signup";
import { PrivateRoutes } from "./PrivateRoutes";
import { Home } from "../pages/Home";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/auth" element={<Authentication />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
};

export { AppRoutes };
