import { ArrowDownIcon } from "lucide-react";


export default function TransactionItem(props: { currency: string | undefined }) {
    const { currency } = props
    return (
        <div className="w-full ">
            <p className="w-full border-b pb-2 mb-4 text-sm text-gray-700">Today</p>
            <div className="flex items-center justify-between">
                <div className="flex space-x-2 items-center">
                    <div className="bg-gray-100 rounded-full size-12 flex justify-center items-center">
                        <ArrowDownIcon className="" />

                    </div>
                    <span className="font-semibold">Muhammad Adnan Riaz</span>
                </div>
                <div className="text-slate-700 font-semibold">+ 200 {currency}</div>
            </div>
        </div>

    )
}