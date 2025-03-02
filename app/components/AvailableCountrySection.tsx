import { countriesList } from "../utils/countries";

export default function AvailableinCountrySection() {
  return (
    <section className="bg-gray-100 w-full">
      <div className="max-w-7xl w-full px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:mb-0 mb-6 p-4">
            <div className="flex items-center justify-center w-full">
            <span className="text-4xl text-center sm:text-6xl font-bold intersect:animate-fade-up animate-duration-1000 animate-delay-500">
              Send money to over 20+ Countries across the world
            </span>
            </div>
           
            <div className="grid grid-cols-2 sm:grid-cols-5 text-center sm:text-center` gap-8 pt-14 intersect:animate-fade-up animate-duration-1000 animate-delay-500 ">
              {countriesList.slice(0, 21).map((country) => {
                return (
                  <div key={country.code} >
                    <span className={`fi fi-${country.code.toLowerCase()} text-5xl mb-1 h-12 w-12`}></span>
                    <p className="">{country.name}</p>
                  </div>
                );
              })}{" "}
            </div>
          </div>
        </div>  
      </div>
      
    </section>
  );
}
