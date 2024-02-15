import React from "react";

interface CountryFilterProps {
  filteredName: string;
  filteredRegion: string;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRegionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CountryFilter: React.FC<CountryFilterProps> = ({
  filteredName,
  filteredRegion,
  handleNameChange,
  handleRegionChange,
}) => {
  return (
    <section className="filter">
      <div className="input">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          value={filteredName || ""}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <select
          name="select"
          id="select"
          className="select"
          value={filteredRegion || ""}
          onChange={handleRegionChange}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default CountryFilter;
