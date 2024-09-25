import axiosInstance from "./axiosInstance";

class UserApi {
  static getCurrentUser() {
    return axiosInstance.get('/api/user/me');
  }
  static updateUser(userId, userData) {
    return axiosInstance.patch(`/api/user/${userId}`, userData);
  }
}

export default UserApi;