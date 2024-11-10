
export interface CreateCurrency {
    currency_code: string;
    currency_name: string;
}

export interface CreateCurrencyResponse {
    id: string;
    created_at: string;
    updated_at: string;
    currency_name: string;
    currency_code: string;
}

export interface ListCurrencies {
    id: number;
    created_at: string;
    updated_at: string;
    currency_name: string;
    currency_code: string;
}