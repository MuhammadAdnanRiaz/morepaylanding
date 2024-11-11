/* eslint-disable @typescript-eslint/no-explicit-any */
// services/authService.ts
import apiClient from "../apiClient";
import { FundWallet, } from "./types";

export const fundWalletService = async (
    values: FundWallet,
): Promise<string[]> => {
    try {
        const response = await apiClient.post<string[]>(
            "/exchange/wallet/fund/",
            {
                ...values,
            },
        );
        return response.data;
    } catch (error: any) {
        throw error; // This allows error handling at the component level
    }
};
