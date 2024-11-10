// app/components/RegisterAuthPage.tsx
import RegisterAuthForm from "./RegisterAuthForm"; // Importing the client component
import { fetchRoles } from "@/services/roleService";

export default async function RegisterAuthPage() {
  const roles = await fetchRoles();

  return <RegisterAuthForm roles={roles} />; // Pass data as props to client component
}
