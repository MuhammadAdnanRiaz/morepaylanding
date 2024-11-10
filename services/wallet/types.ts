import { CreateCurrencyResponse } from "../currency/types";

export interface CreateWallet {
    currency_id: number;
}

export interface CreateWalletResponse {
    currency_id: number;
}

export interface FundWallet {
    amount: number;
    currency: number;
}

export interface GetAllWallets {
    id: number;
    created_at: string;
    updated_at: string;
    balance: number;
    is_active: boolean;
    user: number;
    currency: CreateCurrencyResponse
}

export interface DeleteWallet {
    wallet_id: number;
}

export interface GetWalletDetail {
    wallet_id: number;
}

export interface GetWalletDetailResponse {
    is_active: boolean;
}