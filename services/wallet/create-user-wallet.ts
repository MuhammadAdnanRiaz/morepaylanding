/* eslint-disable @typescript-eslint/no-explicit-any */
// services/authService.ts
import apiClient from "../apiClient";
import { CreateWallet, CreateWalletResponse } from "./types";

export const createWalletService = async (
    values: CreateWallet,
): Promise<CreateWalletResponse> => {
    try {
        const response = await apiClient.post<CreateWalletResponse>(
            "/exchange/wallet/create/",
            {
                ...values,
            },
        );
        return response.data;
    } catch (error: any) {
        throw error; // This allows error handling at the component level
    }
};
