import axiosInstance from "./axiosInstance";

class AuthApi {
  static login(data) {
    return axiosInstance.post('/api/auth/login', data);
  }

  static async signup(data) {
    return axiosInstance.post('/api/auth/signup', data);
  }
}

export default AuthApi;