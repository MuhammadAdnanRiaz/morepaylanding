export default function OpenAccountSection() {
  return (
    <section className="text-gray-600 w-full bg-gray-100 overflow-hidden">
      <div className="max-w-7xl px-5 py-24 mx-auto">
        <div className=" mx-auto  flex flex-col-reverse lg:flex-row flex-wrap justify-center">
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <img
              className="w-80 h-auto object-cover object-center rounded"
              alt="hero"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/iphone-mockup.png"
              width={720}
              height={500}
            />
          </div>

          <div className="lg:w-1/2 mb-10 lg:mb-0 w-full max-w-md lg:max-w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col text-left items-start justify-center ">

            <h1 className="text-gray-900 text-4xl text-left title-font font-bold mb-1">
            International money transfer

            </h1>

            <p className="leading-relaxed">
            Move money across the globe quickly and at the best rates with
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
