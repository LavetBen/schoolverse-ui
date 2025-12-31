import api from './api';

export interface LoginResponse {
    token: string;
    username: string;
    email: string;
    role: string;
}

export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
    role: string[];
}

export const authService = {
    login: async (username: string, password: string): Promise<LoginResponse> => {
        const response = await api.post('/auth/login', { username, password });
        return response.data;
    },

    register: async (registerData: RegisterRequest): Promise<string> => {
        const response = await api.post('/auth/register', registerData);
        return response.data;
    },

    logout: () => {
        localStorage.removeItem('schoolverse_user');
    },
};
