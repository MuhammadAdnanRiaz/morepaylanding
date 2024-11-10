// services/get-currency-list.ts
import apiClient from "../apiClient";
import { ListCurrencies } from "./types";

export const fetchCurrencyList = async (): Promise<ListCurrencies[]> => {
    try {
        const response = await apiClient.get<ListCurrencies[]>(
            "/exchange/currency/get/all/",
        ); // Typing the response data as ListCurrencies[]
        return response.data;
    } catch (error) {
        console.error("Error fetching currency list:", error);
        throw error; // This allows error handling at the component level
    }
};

