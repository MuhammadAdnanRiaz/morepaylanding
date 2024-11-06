interface Currency {
    id: number;
    created_at: string; // ISO 8601 date string
    updated_at: string; // ISO 8601 date string
    currency_code: string;
    currency_name: string;
}

interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    role: number;
}

export interface Offer {
    id: number;
    user: User;
    from_currency: Currency;
    to_currency: Currency;
    created_at: string; // ISO 8601 date string
    updated_at: string; // ISO 8601 date string
    offer_amount: string; // Assuming it can have decimal values, it's a string
    offer_rate: string; // Same as offer_amount, assuming it's a decimal value in string format
    expires_at: string; // ISO 8601 date string
    status: string; // Example: "open"
}