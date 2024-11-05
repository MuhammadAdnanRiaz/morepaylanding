import { Button } from "@/components/ui/button";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { PlusIcon } from "lucide-react";
import OfferListView from "./offer-list";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

export default async function OfferPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center py-2">
        <h1 className="text-xl font-bold">
          <span>Offers</span>
        </h1>
        <Button>
          <PlusIcon />
          <span>Create offer</span>
        </Button>
      </div>
      <OfferListView />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
