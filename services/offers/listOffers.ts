// services/authService.ts
import { toast } from "sonner";
import apiClient from "../apiClient";
import { Offer } from "./types";

export const listOffersService = async (): Promise<Offer[]> => {
  try {
    const response = await apiClient.get<Offer[]>("/exchange/offer/get/all/");
    return response.data;
  } catch (error) {
    console.error("Error fetching roles:", error);
    toast("Something went wrong during listing offers");
    throw error; // This allows error handling at the component level
  }
};
