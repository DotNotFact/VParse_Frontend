import { ApiRoutes } from "../../src/Routes/apiRoutes";
import { AxiosResponse } from "axios";
import { api } from "../api/api";

const { Admin } = ApiRoutes;

class AdminService {
  async AddRole(id: string | null, vipId: string, role: string) {
    return await api.get(
      Admin.ADD_ROLE + `?id=${id}&vipid=${vipId}&role=${role}`
    );
  }

  async IsAdmin(id: string | null): Promise<AxiosResponse> {
    return await api.get(Admin.IS_ADMIN + `?id=${id}`);
  }
}

export default new AdminService();
