import { AxiosResponse } from "axios";
import { api } from "../api/api";
import { ApiRoutes } from "../../src/Routes/apiRoutes";

const { Bookmark } = ApiRoutes;

class BookmarkService {
  async getAllBookmarks(): Promise<AxiosResponse> {
    return await api.get(Bookmark.GET_ALL_BOOKMARKS);
  }

  async addBookmark(
    bookmarkUserId: string,
    imageUrl: string
  ): Promise<AxiosResponse> {
    return await api.get(
      Bookmark.ADD_BOOKMARK +
        `?bookmarkUserId=${bookmarkUserId}&imageUrl=${imageUrl}`
    );
  }

  async removeBookmark(bookmarkUserId: string): Promise<AxiosResponse> {
    return await api.get(
      Bookmark.REMOVE_BOOKMARK + `?&bookmarkUserId=${bookmarkUserId}`
    );
  }
}

export default new BookmarkService();
