import bookmarkService from "../../../../Services/BookmarkService";
import { useEffect, useState } from "react";
import "./Bookmark.css";

interface IBookmarkProps {
  id: string;
  imageUrl: string;
  bookUserId: string;
}

export const Bookmark = () => {
  const [users, setUsers] = useState([]);
  const [rerender, setRerender] = useState(false);

  const handleRemoveBookmark = (bookmarkUserId: string) => {
    bookmarkService
      .removeBookmark(bookmarkUserId)
      .then((response) => {
        if (response.status === 200) {
          setRerender((value: boolean) => !value);
        }
      })
      .catch((error) => {
        console.error("Ошибка при удалении пользователя из закладок: ", error);
      });
  };

  useEffect(() => {
    bookmarkService
      .getAllBookmarks()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Ошибка получения пользователей из закладкок: ", error);
      });
  }, [rerender]);

  return (
    <div className="bookmark-wrapper">
      <div className="maxWidth p-1 bookmark-container">
        {users &&
          users.map((user: IBookmarkProps) => (
            <div key={user.id} className="bookmark-user">
              <img src={user.imageUrl} alt="User" />
              <div className="p-1 bookmark-btn">
                <button onClick={() => handleRemoveBookmark(user.bookUserId)}>
                  <img src="./Pictures/Close.svg" alt="delete" />
                </button>
                <a href={"https://vk.com/id" + user.bookUserId}>
                  <img src="./Pictures/ChatBookmark.svg" alt="send" />
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
