import { ApiRoutes } from "../../src/Routes/apiRoutes";
import { IFilterProps } from "../models/IHeader";
import { AxiosResponse } from "axios";
import { api } from "../api/api";

const { User } = ApiRoutes;

class UserService {
  async AddSwipe(): Promise<AxiosResponse> {
    return await api.get(User.ADD_SWIPE);
  }

  async Search(filters: IFilterProps): Promise<AxiosResponse> {
    return await api.get(User.SEARCH, { params: filters });
  }
}

export default new UserService();
