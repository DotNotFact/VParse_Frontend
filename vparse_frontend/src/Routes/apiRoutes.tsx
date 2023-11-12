export const ApiRoutes = {
  User: {
    SEARCH: "/User/Search",
    ADD_SWIPE: "/User/AddSwipe",
  },

  Admin: {
    ADD_ROLE: "/Admin/AddRole",
    IS_ADMIN: "/Admin/IsAdmin",
  },

  Bookmark: {
    GET_ALL_BOOKMARKS: "/Bookmark/GetAllBookmarks",
    ADD_BOOKMARK: "/Bookmark/AddBookmarkAsync",
    REMOVE_BOOKMARK: "/Bookmark/RemoveBookmarkAsync",
  },

  VkAuth: {
    CheckSession: "VkAuth/CheckSession",
    Logout: "VkAuth/Logout",
  },
};
