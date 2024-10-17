import { Route, Routes } from "react-router-dom";
import Auth from "../pages/auth";
import Dashboard from "../pages/dashboard";
import PrivateRoute from "./privateRoutes";
import RegisterAnimal from "../pages/registerAnimal";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rotas Públicas */}
      <Route path="/" element={<Auth />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register/animal" element={<RegisterAnimal />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;