import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Offer } from "@/services/offers/types";
import supportedCurrencies from "@/lib/supported_countries.json";
import moment from 'moment'
import { NotebookPenIcon } from "lucide-react";

export default function OfferListItem(props: { offer: Offer }) {
  const { offer } = props;
  const FromCurrency = supportedCurrencies.find(
    (c) => c.code === offer.from_currency.currency_code,
  );
  const ToCurrency = supportedCurrencies.find(
    (c) => c.code === offer.to_currency.currency_code,
  );

  return (
    <Card className="p-2 hover:bg-gray-50">
      <CardHeader className="p-0">
        <CardTitle><span className="pl-2 text-xs text-gray-600">{moment(offer.created_at).fromNow()}</span></CardTitle>
        <CardDescription>
          <div className="flex items-center justify-between">
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
            <Button size={"sm"} variant={"default"} className="bg-deep-forest-green-700/70 hover:bg-deep-forest-green-700/50 rounded-xl flex items-center space-x-1">
              <NotebookPenIcon />
              <span>Place bid</span>
            </Button>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-4">
        <div className="grid grid-cols-5">
          {/* currency detail */}
          <div className="flex flex-col items-start">
            <p className="text-xs text-gray-600">From Currecny</p>
            <p className="text-xs font-bold">{FromCurrency?.currency}</p>
          </div>

          <div className="flex flex-col items-start">
            <p className="text-xs text-gray-600">To Currency</p>
            <p className="text-xs font-bold">{ToCurrency?.currency}</p>
          </div>

          <div className="flex flex-col items-start">
            <p className="text-xs text-gray-600">Amount</p>
            <p className="text-xs font-bold">
              {FromCurrency?.symbol} {parseFloat(offer.offer_amount).toFixed(2)}
            </p>
          </div>

          <div className="flex flex-col items-start">
            <p className="text-xs text-gray-600">Preferred Rate</p>
            <p className="text-xs font-bold">
              {FromCurrency?.symbol} {parseFloat(offer.offer_rate).toFixed(2)}
            </p>
          </div>

          <div className="flex flex-col items-start">
            <p className="text-xs text-gray-600">Expires at</p>
            <p className="text-xs font-bold">
              {moment(offer.expires_at).format('LLL')}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
