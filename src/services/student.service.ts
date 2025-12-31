import api from './api';

export interface AddStudentRequest {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dob: string;
    phone: string;
    address: string;
}

export interface Student {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    dob: string;
    phone: string;
    address: string;
    // Optional fields if backend returns them, or for UI state
    rollNo?: string;
    class?: string;
    status?: string;
    avatar?: string;
}

export const studentService = {
    addStudent: async (studentData: AddStudentRequest) => {
        const response = await api.post('/students', studentData);
        return response.data;
    },

    getAllStudents: async (): Promise<Student[]> => {
        const response = await api.get('/students');
        return response.data;
    }
};
