import bookmarkService from "../../../../Services/BookmarkService";
import { useEffect, useState } from "react";
import "./Bookmark.css";

export const Bookmark = () => {
  const [users, setUsers] = useState([]);
  const [rerender, setRerender] = useState(false);
  const id = localStorage.getItem("token");

  const handleRemoveBookmark = (bookmarkUserId: string) => {
    try {
      bookmarkService.removeBookmark(id, bookmarkUserId).then((response) => {
        if (response.status === 200) {
          setRerender((value: any) => !value);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = () => {
      try {
        bookmarkService.getAllBookmarks(id).then((response) => {
          setUsers(response.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [rerender]);

  return (
    <div className="bookmark-wrapper">
      <div className="maxWidth p-1 bookmark-container">
        {users &&
          users.map((user: any) => (
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
