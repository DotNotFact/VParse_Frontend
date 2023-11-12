import { ApiRoutes } from "../../src/Routes/apiRoutes";
import { AxiosResponse } from "axios";
import { api } from "../api/api";

const { Admin } = ApiRoutes;

class AdminService {
  async AddRole(vipId: string, role: string) {
    return await api.get(Admin.ADD_ROLE + `?vipid=${vipId}&role=${role}`);
  }

  async IsAdmin(): Promise<AxiosResponse> {
    return await api.get(Admin.IS_ADMIN);
  }
}

export default new AdminService();
