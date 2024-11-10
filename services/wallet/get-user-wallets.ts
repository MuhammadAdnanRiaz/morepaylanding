// services/get-user-wallets.ts
import apiClient from "../apiClient";
import { GetAllWallets } from "./types";

export const fetchUserWallets = async (): Promise<GetAllWallets[]> => {
  try {
    const response = await apiClient.get<GetAllWallets[]>(
      "/exchange/wallet/get/all/",
    ); // Typing the response data as Role[]
    return response.data;
  } catch (error) {
    console.error("Error fetching roles:", error);
    throw error; // This allows error handling at the component level
  }
};
