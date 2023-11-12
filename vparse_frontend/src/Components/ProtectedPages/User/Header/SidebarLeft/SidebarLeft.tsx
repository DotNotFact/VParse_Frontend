import { CopyToClipboard } from "../../../../../Components/CustomUI/CopyToClipboard/CopyToClipboard";
import vkAuthService from "../../../../../Services/VkAuthService";
import adminService from "../../../../../Services/AdminService";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {
  ISidebarLeftData,
  ISidebarLeftProps,
} from "../../../../../models/IHeader";
import "./SidebarLeft.css";
import { AuthContext } from "../../../../../Auth/AuthContext";

export const SidebarLeft = ({
  handleSidebarLeft,
  isLeft,
}: ISidebarLeftProps) => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const toggleSidebarLeft = () => {
    handleSidebarLeft();
  };

  const handleLogout = () => {
    vkAuthService
      .Logout()
      .then((response) => {
        if (response.status === 200) {
          setIsAuthenticated(false);
          handleSidebarLeft();
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Ошибка при выходе из сессии", error);
      });
  };

  const SidebarLeftData: ISidebarLeftData[] = [
    {
      title: "Учетная запись",
      url: "./Pictures/Exit.svg",
      href: "",
      text: "Выйти",
      handler: handleLogout,
    },
    {
      title: "Дополнительно",
      url: "./Pictures/Donate.svg",
      href: "/donateinfo",
      text: "Донат",
      handler: toggleSidebarLeft,
    },
    {
      title: "",
      url: "./Pictures/Mail.svg",
      href: "https://web.telegram.org/a/#702091274",
      text: "Связаться с нами",
      handler: toggleSidebarLeft,
    },
    {
      title: "",
      url: "./Pictures/Vparse.svg",
      href: "",
      text: "ВПарсер v1.0.0",
      handler: toggleSidebarLeft,
    },
  ];

  useEffect(() => {
    adminService
      .IsAdmin()
      .then((response) => {
        setIsAdmin(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при проверке на админа: ", error);
      });
  }, []);

  return (
    <div
      className={
        isLeft
          ? "maxWidth sidebarLeft-wrapper sidebarLeft-active"
          : "maxWidth sidebarLeft-wrapper"
      }
    >
      <div className="p-1 sidebarLeft-container">
        <div className="sidebarLeft-top">
          <p>ВПарсе</p>
          <button onClick={toggleSidebarLeft}>
            <img src="./Pictures/ArrowLeft.svg" alt="ArrowLeft" />
          </button>
        </div>

        <div className="sidebarLeft-info">
          {SidebarLeftData.map((item) => {
            return (
              <div key={item.text}>
                {item.title && <hr />}

                <label
                  style={item.title ? { display: "flex" } : { display: "none" }}
                >
                  {item.title}
                </label>

                {item.href ? (
                  <Link to={item.href} onClick={item.handler}>
                    <img src={item.url} alt="svg" />
                    <p>{item.text}</p>
                  </Link>
                ) : (
                  <button onClick={item.handler}>
                    <img src={item.url} alt="svg" />
                    <p>{item.text}</p>
                  </button>
                )}
              </div>
            );
          })}
          {isAdmin && (
            <div>
              <label>Админка</label>
              <Link to="/adddonate" onClick={toggleSidebarLeft}>
                <img src="./Pictures/Puzzle.svg" alt="svg" />
                <p>Админ Панель</p>
              </Link>
            </div>
          )}
        </div>

        {/* <div className="sidebarLeft-bottom">
          <label>Идентификатор пользователя</label>
          <CopyToClipboard />
        </div> */}
      </div>
    </div>
  );
};
