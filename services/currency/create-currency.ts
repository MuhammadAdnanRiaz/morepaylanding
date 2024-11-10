// services/authService.ts
import { toast } from "sonner";
import apiClient from "../apiClient";
import { CreateCurrency, CreateCurrencyResponse } from "./types";

export const createCurrencyService = async (
    values: CreateCurrency,
): Promise<CreateCurrencyResponse> => {
    try {
        const response = await apiClient.post<CreateCurrencyResponse>(
            "/exchange/currency/create/",
            {
                ...values,
            },
        );
        return response.data;
    } catch (error) {
        console.error("Error creating currency:", error);
        toast("Something went wrong during creating currency process");
        throw error; // This allows error handling at the component level
    }
};
