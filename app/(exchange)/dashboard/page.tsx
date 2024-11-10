import CreateWalletButton from "@/components/common/create-wallet-button";
import CurrencyBalanceAccount from "@/components/common/currency-card";
import { LoyaltyDonutChart } from "@/components/common/loyalty-donut-chart";
import { TransactionConfidenceScoreDonut } from "@/components/common/transaction-confidence-donut";
import { MostTradingCurrencies } from "@/components/common/trending-currencies";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { fetchUserWallets } from "@/services/wallet/get-user-wallets";

export default async function HomePage() {
  // fetch the list of available user wallets 
  const userWallets = await fetchUserWallets()
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex gap-4 ">
          {userWallets.map(wallet => {
            return (
              <CurrencyBalanceAccount key={wallet.id} wallet={wallet} />
            )
          })}
          <CreateWalletButton />

        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
          <div className="grid grid-cols-12 gap-4 ">
            <div className="col-span-3">
              <TransactionConfidenceScoreDonut />
            </div>
            <div className="col-span-3">
              <LoyaltyDonutChart />
            </div>

            <div className="bg-muted/50 w-full h-full col-span-6">
              <MostTradingCurrencies />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
