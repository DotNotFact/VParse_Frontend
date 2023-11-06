import bookmarkService from "../../../../Services/BookmarkService";
import userService from "../../../../Services/UserService";
import { Loader } from "../../../CustomUI/Loader/Loader";
import { useState } from "react";
import "./Main.css";

export const Main = ({ users, isLoading, isSuccess }: any) => {
  const token = localStorage.getItem("token") as string;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextUser = () => {
    try {
      userService.AddSwipe(token);
      if (users.length > 0) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddBookmark = () => {
    try {
      const imageUrl = encodeURIComponent(users[currentIndex].imageUrl);
      bookmarkService.addBookmark(token, users[currentIndex].id, imageUrl);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="main-wrapper">
      <div className="p-1 maxWidth main-container">
        {isLoading ? (
          <Loader load={isLoading} />
        ) : (
          isSuccess && (
            <>
              <div className="main-top">
                <img
                  loading="lazy"
                  src={users[currentIndex].imageUrl}
                  alt="UserPhoto"
                />
                <div className="p-1 main-info">
                  <div className="main-wrap-text main-info-left">
                    <p>
                      {users[currentIndex]?.firstName}{" "}
                      {users[currentIndex]?.lastName}
                    </p>
                    {/* <label>{users[currentIndex]?.firstName}</label>*/}
                  </div>
                  {/*<div className="main-wrap-text main-info-right">*/}
                  {/*    <button>*/}
                  {/*        <BsImages />*/}
                  {/*        Еще*/}
                  {/*    </button>*/}
                  {/*</div>*/}
                </div>
              </div>

              <div className="main-bottom">
                <button onClick={handleNextUser}>
                  <img src="./Pictures/Show.svg" alt="svg" />
                </button>
                <a href={"https://vk.com/id" + users[currentIndex].id}>
                  <img src="./Pictures/Chat.svg" alt="svg" />
                </a>
                <button onClick={handleAddBookmark}>
                  <img src="./Pictures/AddToQueue.svg" alt="svg" />
                </button>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
};
