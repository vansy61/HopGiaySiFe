import axiosInstance from "./axiosInstance";

class AuthApi {
  static login(data) {
    return axiosInstance.post('/api/auth/login', data);
  }

  static async signup(data) {
    return axiosInstance.post('/api/auth/signup', data);
  }

  static async verifyAccount(data) {
    return axiosInstance.post('/api/auth/verify-email', data);
  }
}

export default AuthApi;