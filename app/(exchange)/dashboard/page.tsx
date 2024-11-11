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
      <>
        <div>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
        </div>
      </>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex gap-4 ">
          {userWallets.map(wallet => {
            return (
              <CurrencyBalanceAccount key={wallet.id} wallet={wallet} />
            )
          })}
          <CreateWalletButton />

        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          <div className="grid grid-cols-2 gap-4 max-h-[50px] ">
            <div className="grid gap-4 grid-cols-2">
              <div className="">
                <TransactionConfidenceScoreDonut />
              </div>
              <div className="">
                <LoyaltyDonutChart />
              </div>

            </div>


            <div className="w-full h-full">
              <MostTradingCurrencies />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
