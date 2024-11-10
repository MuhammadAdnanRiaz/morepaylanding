/* eslint-disable @next/next/no-img-element */

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { fetchUserWallets } from "@/services/wallet/get-user-wallets";
import SupportedCurrencies from '@/lib/supported_countries.json'
import { ArrowDownToLineIcon, ArrowLeftRightIcon, ArrowUpIcon, PlusIcon, SearchIcon, SlidersHorizontalIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import TransactionItem from "../_components/TransactionItem";
import Link from "next/link";

export default async function WalletDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    const walletList = await fetchUserWallets()
    const selectedWallet = walletList.find(w => parseInt(w.id.toString()) === parseInt(id))
    const localWallet = SupportedCurrencies.find(s => s.code === selectedWallet?.currency.currency_code)
    return (
        <>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="/dashboard/offers">Walelts</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href={`/dashboard/wallets/${id}/`}>{selectedWallet?.currency.currency_name}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="container max-w-4xl mx-auto py-10">
                    <div className="flex justify-between items-center border-b py-2">
                        <div>
                            <div className="flex items-center space-x-2">
                                <img
                                    className="size-12 rounded-full object-cover"
                                    alt={selectedWallet?.currency.currency_name}
                                    src={localWallet?.flag} />
                                <h2>{selectedWallet?.currency.currency_name}</h2>
                            </div>
                            <h1 className="font-bold text-4xl mt-3 ">{localWallet?.symbol}0.00</h1>
                            <div>
                                <p className="bg-gray-200 py-1 px-3 rounded-2xl max-w-max text-sm mt-2">Active</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-8">
                            <Link href={`/dashboard/flow/add-funds/${selectedWallet?.id.toString()}/`}>
                                <button>
                                    <div className="bg-deep-forest-green-500/70 hover:bg-deep-forest-green-500/50 cursor-pointer rounded-full size-16 flex items-center justify-center">
                                        <PlusIcon />
                                    </div>
                                    <span>Add</span>
                                </button>
                            </Link>
                            <button>

                                <div className="bg-deep-forest-green-500/70 hover:bg-deep-forest-green-500/50 cursor-pointer rounded-full size-16 flex items-center justify-center">
                                    <ArrowLeftRightIcon />
                                </div>
                                <span>Convert</span>

                            </button>
                            <button>
                                <div className="bg-deep-forest-green-500/70 hover:bg-deep-forest-green-500/50 cursor-pointer rounded-full size-16 flex items-center justify-center">
                                    <ArrowUpIcon />
                                </div>
                                <span>Send</span>

                            </button>


                        </div>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center justify-between pt-8 pb-5">
                            <p className="font-bold text-xl">Transactions</p>

                            <div className="flex items-center space-x-4">
                                <div className="relative">
                                    <SearchIcon className="absolute size-4 text-gray-400 top-2 left-2" />
                                    <Input type="search" placeholder="Search" className="rounded-3xl pl-8 h-8 border-gray-400" />
                                </div>
                                <button className="flex items-center space-x-2 bg-deep-forest-green-500/70 hover:bg-deep-forest-green-500/50 cursor-pointer py-1 px-4 rounded-3xl font-bold">
                                    <SlidersHorizontalIcon className="size-4" />
                                    <span>Filters</span>
                                </button>
                                <button className="flex items-center space-x-2 bg-deep-forest-green-500/70 hover:bg-deep-forest-green-500/50 cursor-pointer py-1 px-4 rounded-3xl font-bold">
                                    <ArrowDownToLineIcon className="size-4" />
                                    <span>Download</span>
                                </button>
                            </div>
                        </div>

                        {/* list of transactions */}
                        <TransactionItem currency={localWallet?.currency} />
                    </div>
                </div>
            </div >
        </>
    );
}
