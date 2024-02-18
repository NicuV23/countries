import React from "react";
import CountryPiece from "./Countrypiece";

interface CountryListProps {
  countries: import("./Countrypiece").Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  return (
    <div className="grid">
      {countries.map((country) => (
        <CountryPiece key={country.numericCode} {...country} />
      ))}
    </div>
  );
};

export default CountryList;
