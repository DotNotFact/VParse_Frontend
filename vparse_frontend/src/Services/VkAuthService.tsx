import { ApiRoutes } from "../../src/Routes/apiRoutes";
import { AxiosResponse } from "axios";
import { api } from "../api/api";

const { VkAuth } = ApiRoutes;

class VkAuthService {
  async CheckSession(): Promise<AxiosResponse> {
    return await api.get(VkAuth.CheckSession);
  }

  async Logout(): Promise<AxiosResponse> {
    return await api.post(VkAuth.Logout);
  }
}

export default new VkAuthService();
