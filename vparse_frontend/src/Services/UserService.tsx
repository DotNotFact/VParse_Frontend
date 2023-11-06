import { ApiRoutes } from "../../src/Routes/apiRoutes";
import { AxiosResponse } from "axios";
import { api } from "../api/api";

const { User } = ApiRoutes;

class UserService {
  async AddSwipe(id: string | null): Promise<AxiosResponse> {
    return await api.get(User.ADD_SWIPE + `?id=${id}`);
  }

  async Search(id: string, filters: any): Promise<AxiosResponse> {
    return await api.get(User.SEARCH + `?id=${id}`, { params: filters });
  }
}

export default new UserService();
