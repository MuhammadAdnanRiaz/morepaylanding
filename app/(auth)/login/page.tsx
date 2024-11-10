import { getServerSession } from "next-auth";
import LoginAuthForm from "./LoginAuthForm"; // Importing the client component
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function LoginAuthPage() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/home");
  }

  return <LoginAuthForm />; // Pass data as props to client component
}
