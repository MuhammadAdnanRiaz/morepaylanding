'use client'

import { useEffect, useState } from "react";
import OfferListItem from "../offer-list";
import { Offer } from "@/services/offers/types";
import { listOffersService } from "@/services/offers/listOffers";
import NoOffersFound from "./no-record";

export default function OfferListView() {
    const [listData, setListData] = useState<Offer[]>()

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8000/ws/notifications/');

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message) {
                fetchData()
            }
            console.log("Received message:", message);
            // Handle the message, e.g., show a notification
        };

        return () => socket.close();
    }, []);

    async function fetchData() {
        const offerResponse = await listOffersService();
        setListData(offerResponse)
    }
    return (
        <div className="flex flex-col space-y-1">
            {listData?.length === 0 && (
                <div className="flex justify-center items-center mt-10">
                    <NoOffersFound />
                </div>
            )}
            {listData?.map((offer: Offer) => [
                <OfferListItem key={offer.id} offer={offer} />,
            ])}
        </div>
    )
}