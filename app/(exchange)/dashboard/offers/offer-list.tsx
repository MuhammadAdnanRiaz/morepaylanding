import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Offer } from "@/services/offers/types";
import supportedCurrencies from "@/lib/supported_countries.json";

export default function OfferListItem(props: { offer: Offer }) {
  const { offer } = props;
  const FromCurrency = supportedCurrencies.find(
    (c) => c.code === offer.from_currency.currency_code,
  );
  const ToCurrency = supportedCurrencies.find(
    (c) => c.code === offer.to_currency.currency_code,
  );

  return (
    <Card className="border-none shadow-xl">
      <CardHeader>
        <CardTitle>Posted by</CardTitle>
        <CardDescription>
          <div className="grid grid-cols-4">
            <div className="flex items-center space-x-1">
              <Avatar>
                <AvatarFallback>
                  {offer.user?.first_name[0]}
                  {offer.user?.last_name[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <span className="font-bold text-gray-800">
                  {offer.user?.first_name} {offer?.user?.last_name}
                </span>
                <p className="text-xs">98% succesfull transactions</p>
              </div>
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5">
          {/* currency detail */}
          <div className="flex flex-col items-center space-x-1">
            <p>From Currecny</p>
            <div>
              <p className="text-xs">{FromCurrency?.name}</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-x-1">
            <p>To Currency</p>
            <div>
              <p className="text-xs">{ToCurrency?.name}</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-x-1">
            <p>Amount</p>
            <div>
              <p className="text-xs">
                {FromCurrency?.symbol} {offer.offer_amount}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-x-1">
            <p>Preferred Rate</p>
            <div>
              <p className="text-xs">
                {FromCurrency?.symbol} {offer.offer_rate}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-x-1">
            <p>Expires at</p>
            <div>
              <p className="text-xs">
                {FromCurrency?.symbol} {offer.expires_at}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-100 flex items-center justify-end py-2">
        <Button size={"sm"} variant={"default"} className="">
          Place bid
        </Button>
      </CardFooter>
    </Card>
  );
}
