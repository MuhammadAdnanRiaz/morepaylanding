
export default function LandingSection() {
  return (
    <section className="text-gray-600 w-full max-w-7xl">
      <div className="mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-7xl text-5xl mb-4 font-bold text-deep-forest-green-900">
            Send Money Anywhere, Effortlessly!
          </h1>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="w-80 h-auto object-cover object-center rounded"
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
