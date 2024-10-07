import Image from "next/image";

// visa, mastercard, union pay
export default function PaymentPartnerSection() {
  return (
    <section className="bg-gray-100 w-full py-8">
      <div className="max-w-7xl mx-auto h-full w-full flex flex-col items-center justify-center">
        <p className="font-semibold text-center text-deep-forest-green-900 intersect:animate-fade-up animate-duration-1000 animate-delay-500">Technology partners</p>
        <div className="flex items-center space-x-3 mt-4 intersect:animate-fade-up animate-duration-1000 animate-delay-500">
        <Image
          width={24}
          height={24}
          alt="aws-logo"
          src="/img/payment/aws.png"
          className="w-10 h-10 object-contain"
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
