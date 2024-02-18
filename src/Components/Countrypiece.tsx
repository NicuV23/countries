import React from "react";

export interface Country {
  numericCode: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

const CountryPiece: React.FC<Country> = ({
  name,
  population,
  region,
  capital,
  flag,
}) => {
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
