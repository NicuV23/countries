// CountryPiece.tsx
import React from "react";

interface CountryPieceProps {
  country: {
    numericCode: string;
    name: string;
    population: number;
    region: string;
    capital: string;
    flag: string;
  };
}

const CountryPiece: React.FC<CountryPieceProps> = ({ country }) => {
  const { name, population, region, capital, flag } = country;

  return (
    <article>
      <div className="piece">
        <img className="flags" src={flag} alt={name} />
        <h2 className="name">{name}</h2>
        <h4>
          Population: <span>{population}</span>
        </h4>
        <h4>
          Region: <span>{region}</span>
        </h4>
        <h4>
          Capital: <span>{capital}</span>
        </h4>
      </div>
    </article>
  );
};

export default CountryPiece;
