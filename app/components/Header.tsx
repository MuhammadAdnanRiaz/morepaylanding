import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full text-gray-600 font-display max-w-7xl">
      <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 object-contain">
          <Image
            className="w-12 h-12 text-white rounded-full"
            src="/img/footer_logo.png"
            alt="footer_logo"
            width={40}
            height={40}
          />
          <span className="ml-3 font-bold text-deep-forest-green-950 text-2xl cursor-pointer">
            Morepay
          </span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 text-lg text-deep-forest-green-950 font-semibold hover:text-deep-forest-green-900 cursor-pointer">
            Products
          </a>
          <a className="mr-5 text-lg text-deep-forest-green-950 font-semibold hover:text-deep-forest-green-900 cursor-pointer">
            Developers
          </a>
          <a className="mr-5 text-lg text-deep-forest-green-950 font-semibold hover:text-deep-forest-green-900 cursor-pointer">
            Resources
          </a>
          <a className="mr-5 text-lg text-deep-forest-green-950 font-semibold hover:text-deep-forest-green-900 cursor-pointer">
            Company
          </a>
        </nav>
        <div className="space-x-2">
          <button className="inline-flex h-10 border text-deep-forest-green-950 items-center py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Sign In
          </button>
          <button className="inline-flex text-white items-center bg-deep-forest-green-900 h-10 border-0 py-1 px-3 focus:outline-none hover:bg-deep-forest-green-800 rounded text-base mt-4 md:mt-0">
            Open Account
          </button>
        </div>
      </div>
    </header>
  );
}
