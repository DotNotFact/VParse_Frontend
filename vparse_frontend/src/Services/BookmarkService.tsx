import { AxiosResponse } from "axios";
import { api } from "../api/api";
import { ApiRoutes } from "../../src/Routes/apiRoutes";

const { Bookmark } = ApiRoutes;

class BookmarkService {
  async getAllBookmarks(id: string | null): Promise<AxiosResponse> {
    return await api.get(Bookmark.GET_ALL_BOOKMARKS + `?id=${id}`);
  }

  async addBookmark(
    id: string | null,
    bookmarkUserId: string,
    imageUrl: string
  ): Promise<AxiosResponse> {
    return await api.get(
      Bookmark.ADD_BOOKMARK +
        `?id=${id}&bookmarkUserId=${bookmarkUserId}&imageUrl=${imageUrl}`
    );
  }

  async removeBookmark(
    id: string | null,
    bookmarkUserId: string
  ): Promise<AxiosResponse> {
    return await api.get(
      Bookmark.REMOVE_BOOKMARK + `?id=${id}&bookmarkUserId=${bookmarkUserId}`
    );
  }
}

export default new BookmarkService();
