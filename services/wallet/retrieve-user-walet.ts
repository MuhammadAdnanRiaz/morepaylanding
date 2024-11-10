/* eslint-disable @typescript-eslint/no-explicit-any */
// services/retrieve-user-wallet.ts
import apiClient from "../apiClient";
import { GetWalletDetailResponse } from "./types";

export const retrieveWalletService = async (
    id: number,
): Promise<GetWalletDetailResponse> => {
    try {
        const response = await apiClient.get<GetWalletDetailResponse>(
            `/exchange/exchange/wallet/${id}/`,
        );
        return response.data;
    } catch (error: any) {
        throw error; // This allows error handling at the component level
    }
};
