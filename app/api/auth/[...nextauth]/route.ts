// app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { AuthenticatedUser } from "@/app/types/next-auth"; // Import the user type

interface AxiosErrorResponse {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<AuthenticatedUser | null> {
        try {
          const res = await axios.post<AuthenticatedUser>(
            "http://localhost:8000/auth/login/",
            {
              email: credentials?.email,
              password: credentials?.password,
            },
          );

          if (res.data) {
            return res.data; // Return the authenticated user with type AuthenticatedUser
          }
          return null;
        } catch (error: unknown) {
          const axiosError = error as AxiosErrorResponse;
          // Extract error message from backend response
          const errorMessage =
            axiosError.response?.data?.message || "Login failed";
          throw new Error(errorMessage); // Pass the specific error message
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const authUser = user as AuthenticatedUser; // Cast user to AuthenticatedUser type
        token.accessToken = authUser.access;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
