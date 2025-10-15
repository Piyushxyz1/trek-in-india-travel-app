import "./searchbar.css";
 import trekData from '../trekdestinationcard/trekdata';
import { useState, useMemo, useEffect } from "react";
import { renderStars } from "../starratings/starratings";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
 const location = usePathname();


  // Close modal when route changes
  useEffect(() => {
    setIsModalOpen(false);
  }, [location]);

  const filteredData = useMemo(() => {
    return searchTerm === ""
      ? trekData
      : trekData.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setSearchTerm("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="search-bar-launcher" onClick={handleOpenModal}>
        <FaSearch/>
      </div>

      {isModalOpen && (
        <div 
          className="search-modal-overlay" 
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="search-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="close-button" 
              onClick={handleCloseModal}
              aria-label="Close search modal"
            >
              &times;
            </button>
            <input
              type="text"
              placeholder="Search for treks/destinations/packages"
              value={searchTerm}
              onChange={handleChange}
              className="search-input"
              autoFocus
              aria-label="Search input"
            />
            <div className="items-container">
              {filteredData.length > 0 ? (
                <ul className="search-results-list">
                  {filteredData.map((cur) => (
                    <li key={cur.id}>
                      <Link 
                        href={`/${cur.slug}`} 
                        className="item-link"
                        onClick={handleCloseModal} // Also close on click
                      >
                        <div className="item-list">
                          <div className="item-list-display">
                            <img 
                              src={cur.image} 
                              alt={cur.title} 
                              loading="lazy"
                            />
                            <div className="item-list-title-rating">
                              <p>{cur.title}</p>
                              <span>
                                {renderStars(cur.rating)}({cur.rating})
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="no-results">No results found</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;