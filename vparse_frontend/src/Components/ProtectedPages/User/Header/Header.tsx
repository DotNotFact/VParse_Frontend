import { SidebarRight } from "./SidebarRight/SidebarRight";
import { SidebarLeft } from "./SidebarLeft/SidebarLeft";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

export const Header = () => {
  const [isLeft, setIsLeft] = useState(false);
  const [isRight, setIsRight] = useState(false);

  const handleSidebarLeft = () => {
    setIsLeft((value) => !value);
  };

  const handleSidebarRight = () => {
    setIsRight((value) => !value);
  };

  return (
    <div className="p-1 header-wrapper">
      <SidebarLeft handleSidebarLeft={handleSidebarLeft} isLeft={isLeft} />
      <SidebarRight handleSidebarRight={handleSidebarRight} isRight={isRight} />

      <div className="maxWidth header-container">
        <button onClick={handleSidebarLeft}>
          <img src="./Pictures/Humburger_3.svg" alt="menu" />
        </button>

        <div className="header-center">
          <Link to="main">
            <img src="./Pictures/UsersGroup.svg" alt="main" />
          </Link>

          <Link to="bookmark">
            <img src="./Pictures/BookmarkOpen.svg" alt="bookmark" />
          </Link>
        </div>

        <button onClick={handleSidebarRight}>
          <img src="./Pictures/HumburgerSettings.svg" alt="filter" />
        </button>
      </div>
    </div>
  );
};
