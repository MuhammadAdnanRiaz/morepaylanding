// services/authService.ts
import { toast } from 'sonner';
import apiClient from './apiClient';
import { AuthActivate } from './types'
import { AuthLogin, AuthLoginResponse } from './types/loginTypes'
import { AuthRegister, AuthRegisterResponse } from './types/registerTypes'

export const authLoginService = async (form: AuthLogin): Promise<AuthLoginResponse> => {
    try {
        const { username, password } = form
        const response = await apiClient.post<AuthLoginResponse>('/auth/login/', {
            username,
            password
        }); // 
        return response.data;
    } catch (error) {
        console.error("Error fetching roles:", error);
        toast('Something went wrong during login process')
        throw error; // This allows error handling at the component level
    }
}


export const authRegisterService = async (form: AuthRegister): Promise<AuthRegisterResponse> => {
    try {
        const { first_name, last_name, username, role, referral_code, password } = form
        const response = await apiClient.post<AuthRegisterResponse>('/auth/register/', {
            first_name,
            last_name,
            username,
            password,
            role,
            referral_code,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching roles:", error);
        toast('Something went wrong during register process')
        throw error; // This allows error handling at the component level
    }
}

export const authActivateService = async (form: AuthActivate): Promise<{ message: string }> => {
    try {
        const { user_email, activation_key } = form
        const response = await apiClient.post<{ message: string }>('/auth/activate/user/', {
            user_email,
            activation_key
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching roles:", error);
        toast('Something went wrong during activation process')
        throw error; // This allows error handling at the component level
    }
}