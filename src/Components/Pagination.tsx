import React, { useState, useEffect } from "react";

interface PaginationProps {
  countriesPerPage: number;
  totalCountries: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  countriesPerPage,
  totalCountries,
  currentPage,
  onPageChange,
}) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  useEffect(() => {
    const calculatePageNumbers = () => {
      const numbers = [];
      for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        numbers.push(i);
      }
      return numbers;
    };

    setPageNumbers(calculatePageNumbers());
  }, [totalCountries, countriesPerPage]);

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={number === currentPage ? "active" : ""}>
            <button className="number" onClick={() => onPageChange(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
