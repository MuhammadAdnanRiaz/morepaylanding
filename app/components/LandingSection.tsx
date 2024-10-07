import Image from "next/image";

export default function LandingSection() {
  return (
    <section className="text-gray-600 w-full max-w-7xl">
      <div className="mx-auto flex py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-center mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-7xl text-5xl mb-4 font-bold text-deep-forest-green-900 intersect:animate-fade-up animate-duration-1000 animate-delay-500">
            Send Money Anywhere, Effortlessly!
          </h1>
          <div className="flex items-center space-x-2 intersect:animate-fade-up animate-duration-1000 animate-delay-500">
            <Image 
              alt="google play"
              className="animate-ease-in 
                animate-duration-[2000ms] animate-reverse"
              width={130}
              height={60}
              src="/img/google_play.svg"
            />
             <Image 
              className="animate-ease-in 
                animate-duration-[2000ms]"
              alt="apple store"
              width={130}
              height={60}
              src="/img/apple_store.svg"
            />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full flex items-center justify-center md:w-1/2 w-5/6">
          <img
            className="w-80 h-auto object-cover object-center rounded animate-ease-in 
                animate-duration-[2000ms] animate-spin animate-once animate-reverse"
            alt="hero"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/iphone-mockup.png"
            width={720}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
