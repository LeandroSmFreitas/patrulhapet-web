import { Outlet, Navigate } from "react-router-dom";
import AuthUtils from "../../utils/auth-utils";

const PrivateRoutes = () => {
    const isAuthenticated = AuthUtils.isAuthenticated();

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;