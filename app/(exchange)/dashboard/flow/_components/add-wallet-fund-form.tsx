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
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { PlusIcon } from "lucide-react"
import { fundWalletService } from "@/services/wallet/fund-user-wallet"

const FormSchema = z.object({
    amount: z
        .string({
            required_error: "Please select a amount",
        }).min(1)
})

export function AddWalletFundForm(props: { localWallet: any, currency: string | undefined }) {
    const { localWallet, currency } = props
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            amount: '1'
        }
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            if (currency) {
                setLoading(true)
                await fundWalletService({
                    currency: parseInt(currency),
                    amount: parseFloat(data.amount)
                })
                setLoading(false)

                // successfull
                toast({ title: 'Balance added successfully', variant: 'default' })
                router.replace('/dashboard')
            }

        } catch (error: any) {
            console.log('error', error)
            setLoading(false)
            toast({ title: error.response.data.error.error_message, variant: 'destructive' })
        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md w-full space-y-6">
                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-bold">Amount to add</FormLabel>
                            <div className="border rounded-lg h-14 relative ">
                                <Input min={1} type="number" {...field} className="border-none  shadow-none h-14 outline-none ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                <div className="absolute flex space-x-2 items-center top-3 right-2">
                                    <img src={localWallet.flag} alt={localWallet.currency} className="size-8 rounded-full object-cover" />
                                    <span className="font-bold">{localWallet.currency}</span>
                                </div>
                            </div>

                            <FormMessage />
                        </FormItem>


                    )}
                />
                <div>
                    <p>Paying with</p>
                    <div className="w-full flex items-center justify-between bg-gray-200/70 rounded-lg p-4 px-2">
                        <div className="flex items-center space-x-4">
                            <div className="bg-gray-300 size-12 rounded-full flex justify-center items-center">
                                <PlusIcon />

                            </div   >
                            <p className="font-bold">Payment method</p>

                        </div>
                        <div>
                            <p className="bg-gray-300 py-1 px-3 text-sm rounded-2xl max-w-max">Add</p>
                        </div>

                    </div>
                </div>
                <Button className="w-full rounded-3xl bg-deep-forest-green-800/80 hover:bg-deep-forest-green-800/60 py-5 text-base font-bold" type="submit">{loading ? 'Confirming...' : 'Confirm'}</Button>
            </form>
        </Form>
    )
}
