// services/roleService.ts
import apiClient from './apiClient';
import { Role } from './types';

export const fetchRoles = async (): Promise<Role[]> => {
    try {
        const response = await apiClient.get<Role[]>('/auth/role/get/all/'); // Typing the response data as Role[]
        return response.data;
    } catch (error) {
        console.error("Error fetching roles:", error);
        throw error; // This allows error handling at the component level
    }
};
