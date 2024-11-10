// services/authService.ts
import { toast } from "sonner";
import apiClient from "../apiClient";
import { CreateOffer, CreateOfferResponse } from "./types";

export const createOfferService = async (
  values: CreateOffer,
): Promise<CreateOfferResponse> => {
  try {
    const response = await apiClient.post<CreateOfferResponse>(
      "/exchange/offer/create/",
      {
        ...values,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error creating offer:", error);
    toast("Something went wrong during creating offer process");
    throw error; // This allows error handling at the component level
  }
};
