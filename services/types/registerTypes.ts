interface Role {
    id: number;
    name: string;
    description: string;
}

interface Profile {
    id: number;
    bio: string | null;
    phone_number: string | null;
    address: string | null;
    profile_picture: string | null;
    referral_code: string;
    loyalty_points: number;
    user: number;
    referred_by: string | null;
}

export interface AuthRegister {
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    role: number;
    referral_code: number;
}

export interface AuthRegisterResponse {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    is_active: boolean;
    role: Role;
    profile: Profile;
}
