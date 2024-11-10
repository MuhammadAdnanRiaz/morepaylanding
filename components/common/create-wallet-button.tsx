'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreateWalletButton() {
  const router = useRouter()

  function handleCardClick() {
    router.push(`/dashboard/flow/balance`)
  }
  return (
    <Card onClick={handleCardClick} className="cursor-pointer hover:bg-gray-100 max-h-40 max-w-44 p-3 flex flex-col justify-between">
      <CardHeader className="p-0">
        <CardTitle>
          <span className="flex space-x-2 items-center border rounded-full max-w-min p-1">
            {" "}
            <PlusIcon />
          </span>
        </CardTitle>
        <CardContent></CardContent>
      </CardHeader>
      <CardFooter className="p-0">
        <p className="font-light text-sm text-gray-600">
          Add another currency to your account.
        </p>
      </CardFooter>
    </Card>
  );
}
