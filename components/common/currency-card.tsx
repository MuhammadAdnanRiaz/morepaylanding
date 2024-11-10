/* eslint-disable @next/next/no-img-element */
'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GetAllWallets } from "@/services/wallet/types";
import SupportedCurrencies from '@/lib/supported_countries.json'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CurrencyBalanceAccount(props: { wallet: GetAllWallets }) {
  const { wallet } = props
  const router = useRouter()
  function handleCardClick() {
    router.push(`/dashboard/wallets/${wallet.id}/`)

  }
  return (
    <Card onClick={handleCardClick} className="cursor-pointer w-full hover:bg-gray-100 max-h-40 max-w-44 p-3 flex flex-col justify-between">
      <CardHeader className="p-0">
        <CardTitle>
          <span className="flex space-x-2 items-center">
            {" "}
            <img alt={wallet.currency.id} src={SupportedCurrencies.find(c => c.code === wallet.currency.currency_code)?.flag} className="size-7 rounded-full object-cover" />
            <span className="text-sm">{wallet.currency.currency_name}</span>
          </span>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="p-0">
        <br></br>
        <p className="font-bold text-lg">{parseFloat(wallet.balance.toString()).toFixed(2) || 0}</p>
      </CardFooter>
    </Card>
  );
}
