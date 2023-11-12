import vkAuthService from "../Services/VkAuthService";
import { useNavigate } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Header } from "../Components/ProtectedPages/User/Header/Header";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    vkAuthService
      .CheckSession()
      .then((responce) => {
        if (responce.status === 200) {
          setIsAuthenticated(true);
          navigate("/main");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setIsAuthenticated(false);
          navigate("/login");
        } else {
          console.error("Ошибка проверка сессии: ", error);
        }
      });
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {isAuthenticated && <Header />}
      {children}
    </AuthContext.Provider>
  );
};
