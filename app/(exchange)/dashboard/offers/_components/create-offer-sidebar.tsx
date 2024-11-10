"use client";

import * as React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { CalendarIcon, ClipboardPlus, InfoIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PlusIcon } from "lucide-react";
import { GetAllWallets } from "@/services/wallet/types";
import { createOfferService } from "@/services/offers/createOffer";
import { CreateOffer } from "@/services/offers/types";
import { toast } from "sonner";
import { useState } from "react";

// Set current date to midnight for comparison to accept any time today
const today = new Date();
today.setHours(5, 30, 0, 0);

// Define the schema for form validation with Yup
const formSchema = yup.object({
  offer_amount: yup
    .number()
    .typeError("Amount must be a number")
    .positive("Amount must be positive")
    .min(0.01, "Minimum amount is 0.01")
    .required("Amount is required"),
  offer_rate: yup
    .number()
    .typeError("Expected rate must be a number")
    .positive("Expected rate must be positive")
    .min(0.01, "Minimum rate is 0.01")
    .required("Expected rate is required"),
  expires_at: yup
    .date()
    .min(today, "Expiry date must be today or in the future")
    .required("Expiry date is required"),
  from_currency: yup.string().min(1, "From currency is required").required(),
  to_currency: yup
    .string()
    .min(1, "To currency is required")
    .required()
    .notOneOf(
      [yup.ref("fromCurrency"), null],
      "From and To currency cannot be same",
    ),
});

// fetch list of avaialble currencies and balance
//

interface IProps {
  wallets: GetAllWallets[];
}
export function CreateOfferSidebar(props: IProps) {
  const { wallets } = props;
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      offer_amount: undefined,
      offer_rate: undefined,
      expires_at: new Date(),
      from_currency: "",
      to_currency: "",
    },
  });

  async function onSubmit(values: CreateOffer) {
    setLoading(true);
    try {
      const createOfferResponse = await createOfferService({
        from_currency: parseInt(values.from_currency.toString()),
        to_currency: parseInt(values.to_currency.toString()),
        expires_at: values.expires_at,
        offer_rate: values.offer_rate,
        offer_amount: values.offer_amount,
      });
      if (createOfferResponse.message) {
        toast.success(createOfferResponse.message);
        setLoading(false);
        form.reset();
        setOpen(false);
      }
    } catch {
      setLoading(false);
    }
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="bg-deep-forest-green-700/80 hover:bg-deep-forest-green-700/70">
          <PlusIcon />
          <span>Create offer</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className={"font-display pb-4 mb-4 border-b"}>
          <SheetTitle className="flex items-center space-x-2">
            <ClipboardPlus /> <span>Create offer</span>
          </SheetTitle>
          <SheetDescription>
            Create offer on platform to receive bids from potentials buyers
          </SheetDescription>
        </SheetHeader>
        <div className="font-display">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Amount Field */}
              <FormField
                control={form.control}
                name="offer_amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        {...field}
                        onChange={(e) =>
                          field.onChange(
                            e.target.value
                              ? parseFloat(e.target.value)
                              : undefined,
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Expected Rate Field */}
              <FormField
                control={form.control}
                name="offer_rate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expected Rate</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.0001"
                        {...field}
                        onChange={(e) =>
                          field.onChange(
                            e.target.value
                              ? parseFloat(e.target.value)
                              : undefined,
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Expired At Field */}
              <FormField
                control={form.control}
                name="expires_at"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Expired At</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value ? (
                              field.value.toLocaleDateString()
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date > new Date("2100-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* From Currency Field */}
              <FormField
                control={form.control}
                name="from_currency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>From Currency</FormLabel>

                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {wallets.map((wallet) => (
                          <SelectItem
                            key={wallet.currency.id}
                            value={wallet.currency.id.toString()}
                          >
                            <div className="flex items-center justify-between w-full">
                              <span>
                                {wallet.currency.currency_name} (
                                {wallet.currency.currency_code})
                              </span>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>
                                      Balance: {wallet.balance.toLocaleString()}{" "}
                                      {parseFloat(
                                        wallet.balance.toString(),
                                      ).toFixed(3)}
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* To Currency Field */}
              <FormField
                control={form.control}
                name="to_currency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>To Currency</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {wallets.map((wallet) => (
                          <SelectItem
                            key={wallet.currency.id}
                            value={wallet.currency.id.toString()}
                          >
                            <div className="flex items-center justify-between w-full">
                              <span>
                                {wallet.currency.currency_name} (
                                {wallet.currency.currency_code})
                              </span>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>
                                      Balance: {wallet.balance.toLocaleString()}{" "}
                                      {wallet.balance}
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                {loading ? "Creating.." : "Create"}
              </Button>
            </form>
          </Form>
        </div>
        <SheetFooter>
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
