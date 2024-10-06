import Image from "next/image";

// visa, mastercard, union pay
export default function PaymentPartnerSection() {
  return (
    <section className="bg-gray-100 w-full py-6 ">
      <div className="max-w-7xl mx-auto h-full w-full flex space-x-6 items-center">
        <span className="font-semibold text-deep-forest-green-900">Technology partners</span>
        <div className="flex items-center space-x-3">
        <Image
          width={24}
          height={24}
          alt="aws-logo"
          src="/img/payment/aws.svg"
          className="w-24 h-24"
        />

        <Image
          width={24}
          height={24}
          alt="aws-logo"
          src="/img/payment/visa.svg"
          className="w-10 h-10"
        />

        <Image
          width={24}
          height={24}
          alt="aws-logo"
          src="/img/payment/mastercard.svg"
          className="w-10 h-10"
        />
        </div>
       
      </div>
    </section>
  );
}
