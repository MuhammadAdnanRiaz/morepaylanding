import { User as NextAuthUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}

export interface AuthenticatedUser extends NextAuthUser {
  id: string; // Ensure compatibility by using string for ID
  username: string;
  firstName: string;
  lastName: string;
  access: string; // JWT access token
  refresh?: string; // Optional JWT refresh token
}
