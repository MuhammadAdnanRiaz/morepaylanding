import Image from "next/image";

export default function HowP2PSection() {
  return (
    <section className="w-full text-gray-600 body-font">
      <div className="max-w-7xl px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-5xl text-2xl font-medium title-font text-deep-forest-green-900 mb-4 animate-fade-up">
            How morepay works
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 font-bold rounded-full bg-deep-forest-green-500 inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center border rounded-full text-indigo-500 mb-5 flex-shrink-0">
              <Image
                alt="p2p step 1"
                width={80}
                className="pl-3 w-20 h-20"
                height={80}
                src="/img/p2p-step-1.gif"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3 animate-fade-up">
                1. Place an Order
              </h2>
              <p className="leading-relaxed text-base animate-fade-up">
                Once you place a P2P order, the crypto asset will be escrowed by
                Binance P2P.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
            <Image
                alt="p2p step 1"
                width={80}
                className="pl-3 w-20 h-20"
                height={80}
                src="/img/p2p-step-2.gif"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3 animate-fade-up">
                2. Pay the Seller
              </h2>
              <p className="leading-relaxed text-base animate-fade-up">
                Send money to the seller via the suggested payment methods.
                Complete the fiat transaction and click &quot;Transferred, notify
                seller&quot; on Binance P2P.
              </p>
             
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
            <Image
                alt="p2p step 1"
                width={80}
                className="pl-3 w-20 h-20"
                height={80}
                src="/img/p2p-step-3.gif"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3 animate-fade-up">
                3. Receive Crypto
              </h2>
              <p className="leading-relaxed text-base animate-fade-up">
                Once the seller confirms receipt of money, the escrowed crypto
                will be released to you.
              </p>
              
            </div>
          </div>
        </div>
        <button className="flex mx-auto mt-16 text-white bg-deep-forest-green-900 border-0 py-2 px-8 focus:outline-none hover:bg-deep-forest-green-800 rounded text-lg">
          Learn more
        </button>
      </div>
    </section>
  );
}
