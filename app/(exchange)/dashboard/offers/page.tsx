import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { CreateOfferSidebar } from "@/app/(exchange)/dashboard/offers/_components/create-offer-sidebar";
import { fetchUserWallets } from "@/services/wallet/get-user-wallets";
import { listOffersService } from "@/services/offers/listOffers";
import { Offer } from "@/services/offers/types";
import OfferListItem from "./offer-list";

export default async function OfferPage() {
  const offersList = await listOffersService();
  const wallets = await fetchUserWallets();
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/home">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/home/offers">Offers</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="container mx-auto py-10">
          <div className="flex justify-between items-center py-2">
            <h1 className="text-xl font-bold">
              <span>Offers</span>
            </h1>
            <CreateOfferSidebar wallets={wallets} />
          </div>
          <div className="space-y-1">
            {offersList?.map((offer: Offer) => [
              <OfferListItem key={offer.id} offer={offer} />,
            ])}
          </div>
        </div>
      </div>
    </>
  );
}
