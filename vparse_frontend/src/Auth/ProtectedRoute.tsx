import { ComponentType, FC, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  component: ComponentType;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  component: Component,
}) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};
