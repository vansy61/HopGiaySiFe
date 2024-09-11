import axiosInstance from "./axiosInstance";

class UserApi {
  static getCurrentUser() {
    return axiosInstance.get('/api/user/me');
  }
}

export default UserApi;