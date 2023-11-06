import { CopyToClipboard } from "../../../../../Components/CustomUI/CopyToClipboard/CopyToClipboard";
import adminService from "../../../../../Services/AdminService";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ISidebarLeftData,
  ISidebarLeftProps,
} from "../../../../../models/IHeader";
import "./SidebarLeft.css";

export const SidebarLeft = ({
  handleSidebarLeft,
  isLeft,
}: ISidebarLeftProps) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const toggleSidebarLeft = () => {
    handleSidebarLeft();
  };

  const handleEmtyToken = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const id = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = () => {
      try {
        adminService.IsAdmin(id).then((response) => {
          setIsAdmin(response.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const SidebarLeftData: ISidebarLeftData[] = [
    {
      title: "Учетная запись",
      url: "./Pictures/Exit.svg",
      href: "",
      text: "Выйти",
      handler: handleEmtyToken,
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
      handler: () => {},
    },
    {
      title: "",
      url: "./Pictures/Vparse.svg",
      href: "",
      text: "ВПарсер v1.0.0",
      handler: () => {},
    },
    //   {
    //     title: "",
    //     url: "",
    //     href: "",
    //     text: "Оценить нас",
    //     isAdmin: false,
    //   },
    //   {
    //     title: "",
    //     url: "",
    //     href: "/policypagetext",
    //     text: "Пользовательское соглашение",
    //     isAdmin: false,
    //   },
    //   {
    //     title: "",
    //     url: "",
    //     href: "/confidentialitypagetext",
    //     text: "Политика конфиденциальности",
    //     isAdmin: false,
    //   },
  ];

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
              <>
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
              </>
            );
          })}
          {isAdmin ?? (
            <>
              <label>Админка</label>
              <Link to="/adddonate" onClick={toggleSidebarLeft}>
                <img src="./Pictures/Puzzle.svg" alt="svg" />
                <p>Админ Панель</p>
              </Link>
            </>
          )}
        </div>

        <div className="sidebarLeft-bottom">
          <label>Идентификатор пользователя</label>
          <CopyToClipboard />
        </div>
      </div>
    </div>
  );
};
