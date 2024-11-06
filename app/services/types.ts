export interface Role {
    id: number;
    name: string;
    description: string;
}

export interface AuthActivate {
    user_email: string;
    activation_key: string;
}
