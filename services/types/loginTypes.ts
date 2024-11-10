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
    referred_by: number | null;
}

interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    is_active: boolean;
    role: Role;
    profile: Profile;
}

export interface AuthLogin {
    username: string;
    password: string;
}


export interface AuthLoginResponse {
    user: User;
    refresh: string;
    access: string;
}
