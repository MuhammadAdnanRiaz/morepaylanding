import { countriesList } from "../utils/countries";

export default function AvailableinCountrySection() {
  return (
    <section className="w-full bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto">
        <span className="text-6xl font-semibold">
          Send money to over 20+ Countries across the world
        </span>
        <div className="grid grid-cols-5 gap-8">
          {countriesList.slice(0, 21).map((country) => {
            return (
              <div key={country.code}>
                <p className="text-6xl">{country.emoji}</p>
                <p className="">{country.name}</p>
              </div>
            );
          })}{" "}
        </div>
      </div>
    </section>
  );
}
