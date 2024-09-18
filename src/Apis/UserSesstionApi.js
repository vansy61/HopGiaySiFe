import axiosInstance from "./axiosInstance";

class UserSessionApi {
    static getCurrentUserSessions() {
        return axiosInstance.get('/api/user/login-history');
    }

    static logout(sessionId) {
        return axiosInstance.get(`/api/user/session/${sessionId}/logout`);
    }
}

export default UserSessionApi;