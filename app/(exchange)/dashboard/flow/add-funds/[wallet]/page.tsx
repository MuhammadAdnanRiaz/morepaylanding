import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AddWalletFundForm } from "../../_components/add-wallet-fund-form";
import { fetchUserWallets } from "@/services/wallet/get-user-wallets";
import SupportedCurrencies from '@/lib/supported_countries.json'

export default async function AddBalance({
    params,
}: {
    params: Promise<{ wallet: string }>
}) {
    const id = (await params).wallet
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
                                <BreadcrumbLink href="#">Flow</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="container flex flex-col justify-center items-center mx-auto w-full py-10">
                    <p className="text-xl font-extrabold mb-4">Add money</p>
                    <AddWalletFundForm />
                </div>
            </div>
        </>
    );
}
