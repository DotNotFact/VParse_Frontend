import { api } from "../../../api/api";
import "./Login.css";

export const Login = () => {
  return (
    <>
      <div></div>
      <div className="login-wrapper">
        <div className="maxWidth p-1 login-container">
          <img
            src="https://cdn-edge.kwork.ru/pics/t3/25/23270615-1666815125.jpg"
            alt="Loading..."
            loading="lazy"
          />
          <div className="login-bottom">
            <label>Нажми на кнопку для авторизации</label>
            <a href={api.defaults.baseURL + "/VkAuth/Login"}>Войти</a>
          </div>
        </div>
      </div>
    </>
  );
};
