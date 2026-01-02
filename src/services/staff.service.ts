import api from './api';

export interface Staff {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    department: string;
    role: string;
    dob: string;
    address: string;
}

export interface AddStaffRequest {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    department: string;
    role: string;
    dob: string;
    address: string;
}

export const staffService = {
    getAllStaff: async (): Promise<Staff[]> => {
        const response = await api.get('/staffs');
        return response.data;
    },

    addStaff: async (staffData: AddStaffRequest) => {
        const response = await api.post('/staffs', staffData);
        return response.data;
    },

    updateStaff: async (id: number, staffData: Partial<AddStaffRequest>) => {
        const response = await api.put(`/staffs/${id}`, staffData);
        return response.data;
    },

    deleteStaff: async (id: number) => {
        const response = await api.delete(`/staffs/${id}`);
        return response.data;
    }
};
