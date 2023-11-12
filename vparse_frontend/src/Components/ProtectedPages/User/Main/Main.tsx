import bookmarkService from "../../../../Services/BookmarkService";
import userService from "../../../../Services/UserService";
import { Loader } from "../../../CustomUI/Loader/Loader";
import { useState } from "react";
import "./Main.css";
import { useSearch } from "../../../../hooks/useSearch";

interface IMainProps {
  users: IPersonData[];
  isLoading: boolean;
  isSuccess: boolean;
}

interface IPersonData {
  id: string;
  imageUrl: string;
  firstName: string;
  lastName: string;
}

export const Main = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const {
    data: users,
    isLoading,
    isSuccess,
  } = useSearch({
    age_from: "",
    age_to: "",
    sex: "0",
    sort: "0",
    status: "",
    has_photo: "0",
    online: "0",
    can_write_private_message: "0",
    can_send_friend_request: "0",
    can_see_all_posts: "0",
    is_friend: "0",
    common_count: "0",
  });

  const handleNextUser = () => {
    try {
      userService.AddSwipe();
      if (users.length > 0) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddBookmark = () => {
    const imageUrl = encodeURIComponent(users[currentIndex].imageUrl);
    bookmarkService
      .addBookmark(users[currentIndex].id, imageUrl)
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          console.error("Ошибка добавления пользователя в бд: ", error);
        } else {
          console.error("Другая ошибка бд: ", error);
        }
      });
  };

  if (isLoading) {
    return <Loader load={true} />;
  }

  return (
    <div className="main-wrapper">
      <div className="p-1 maxWidth main-container">
        {isSuccess && (
          <>
            <div className="main-top">
              <img
                loading="lazy"
                src={users[currentIndex]?.imageUrl}
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
              <a href={"https://vk.com/id" + users[currentIndex]?.id}>
                <img src="./Pictures/Chat.svg" alt="svg" />
              </a>
              <button onClick={handleAddBookmark}>
                <img src="./Pictures/AddToQueue.svg" alt="svg" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
