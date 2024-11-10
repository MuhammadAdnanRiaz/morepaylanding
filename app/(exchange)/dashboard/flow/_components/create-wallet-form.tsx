/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import SupportedCurrencies from '@/lib/supported_countries.json'
import { useState } from "react"
import { fetchCurrencyList } from "@/services/currency/get-currency-list"
import { createWalletService } from "@/services/wallet/create-user-wallet"
import { createCurrencyService } from "@/services/currency/create-currency"
import { useRouter } from "next/navigation"

const FormSchema = z.object({
    currency: z
        .string({
            required_error: "Please select a currency",
        })
})

export function CreateWalletForm() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            setLoading(true)
            // fetch list of available currencies 
            const selectedCurrency = SupportedCurrencies.find(c => c.id.toString() === data.currency)
            const currencyList = await fetchCurrencyList()
            if (currencyList.find(c => c.currency_code === selectedCurrency?.code)) {
                const currency = currencyList.find(c => c.currency_code === selectedCurrency?.code)
                // check if curreny exits 
                // create wallet 
                if (currency) {
                    await createWalletService({
                        currency_id: parseInt(currency.id.toString())
                    })
                    setLoading(false)
                    toast({ title: 'Wallet created successfully', variant: 'default' })
                    router.replace('/dashboard')
                }

            }
            // if not then create  
            else {
                // create currency
                if (selectedCurrency) {
                    const createdCurrency = await createCurrencyService({
                        currency_code: selectedCurrency?.code,
                        currency_name: selectedCurrency?.name,
                    })

                    // create wallet 
                    if (createdCurrency) {
                        await createWalletService({
                            currency_id: parseInt(createdCurrency.id.toString())
                        })
                        setLoading(false)
                        toast({ title: 'Wallet created successfully', variant: 'default' })
                        router.replace('/dashboard')
                    }
                }
            }
            setLoading(false)
        } catch (error: any) {
            setLoading(false)
            toast({ title: error.response.data.error.error_message, variant: 'destructive' })
        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-sm space-y-6">
                <FormField
                    control={form.control}
                    name="currency"
                    render={({ field }) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a currency" />
                                    </SelectTrigger>
                                </FormControl>

                                <SelectContent>
                                    {SupportedCurrencies.map(currency => {
                                        return (
                                            <SelectItem className="flex space-x-2 items-center" key={currency.id}
                                                value={currency.id.toString()}>
                                                <div className="flex items-center space-x-2">
                                                    <img className="size-6 rounded-full object-cover" alt={currency.name} src={currency.flag} />
                                                    <span className="font-display f">{currency.name}</span></div>
                                            </SelectItem>
                                        )
                                    })}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            <FormDescription>
                                Your wallet comes with an account number, an institution number and a transit number. You&apos;ll be able to share these with people who want to send money to you. They will avoid hidden fees and bad exchange rates.
                            </FormDescription>

                        </FormItem>
                    )}
                />
                <Button className="w-full rounded-3xl bg-deep-forest-green-800/80 hover:bg-deep-forest-green-800/60" type="submit">{loading ? 'Confirming...' : 'Confirm'}</Button>
            </form>
        </Form>
    )
}
