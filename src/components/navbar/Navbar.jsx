"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./navbar.css";
import megaMenuData from "./megamenu";
import { FaChevronDown, FaChevronRight, FaTimes, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState({
    Trekking: 0,
    activities: 0
  });
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState(null); // Track which nav item is hovered

  const location = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setActiveTab({ Trekking: 0, activities: 0 });
    setHoveredLinkIndex(0);
    setMobileMenuOpen(false);
    setOpenMobileAccordion(null);
    setHoveredNavItem(null);
  }, [location]);

  const toggleMobileAccordion = (section) => {
    setOpenMobileAccordion((prev) => (prev === section ? null : section));
  };

  const renderMegaMenu = (menuType) => {
    if (isMobile) return null;
    let menuData = [];

    if (menuType === "Trekking Tours") {
      menuData = megaMenuData.slice(0, 6);
    } else if (menuType === "Climbing") {
      menuData = megaMenuData.slice(6, 11);
    } else if (menuType === "Biking") {
      menuData = megaMenuData.slice(11);
    }

    const currentActiveTab = activeTab[menuType] || 0;
    const currentLink = menuData[currentActiveTab].links[hoveredLinkIndex];

    return (
      <div
        className="mega-menu"
        onMouseEnter={() => setHoveredNavItem(menuType)} // Keep nav item active when mega menu is hovered
        onMouseLeave={() => {
          setHoveredLinkIndex(0);
          setHoveredNavItem(null); // Reset when leaving mega menu
        }}
      >
        <div className="mega-menu-container">
          <div className="mega-menu-tabs">
            {menuData.map((column, index) => (
              <div
                key={index}
                className={`tab-item ${currentActiveTab === index ? "active" : ""}`}
                onMouseEnter={() => {
                  setActiveTab(prev => ({ ...prev, [menuType]: index }));
                  setHoveredLinkIndex(0);
                }}
              >
                <Link href={currentLink?.href}>{column.title}</Link>
                {currentActiveTab === index && (
                  <motion.div
                    className="active-indicator"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <FaChevronRight className={`chevron-icon ${currentActiveTab === index ? "active" : ""}`} />
              </div>
            ))}
          </div>

          <div className="mega-menu-content">
            {menuData[currentActiveTab].links.map((link, i) => (
              <span
                key={i}
                className={`mega-menu-link ${hoveredLinkIndex === i ? "active" : ""}`}
                onMouseEnter={() => setHoveredLinkIndex(i)}
              >
                {link.name}
                {hoveredLinkIndex === i && (
                  <motion.span
                    className="link-underline"
                    layoutId="linkUnderline"
                  />
                )}
              </span>
            ))}
          </div>

          <div className="mega-menu-image">
            {currentLink?.images?.slice(0, 5).map((img, idx) => {
              const trekName = currentLink.trekNames?.[idx] || currentLink.name;
              const hrefSuffix = trekName.toLowerCase().replace(/\s+/g, '-');
              return (
                <Link
                  key={idx}
                  href={`/${hrefSuffix}`}
                  className="image-link"
                >
                  <div className="image-container">
                    <img src={img.src} alt={img.alt} className="mega-menu-img" />
                    <div className="image-overlay-nav-img">
                      <span className="single-trek-name">{trekName}</span>
                    </div>
                  </div>
                </Link>
              );
            })}

            <div className="view-all-container">
              <Link href={currentLink?.href} className="view-all-button">
                View All {currentLink?.category}
                <FaChevronRight className="view-all-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* <nav className="bg-white text-[#313137] py-3 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between ">
          <div className="flex flex-row gap-3">
            <a
              href="mailto:trekkinginindia@gmail.com"
              className="hover:text-[#f47a2a] transition-colors flex items-center text-[10px] sm:text-sm md:text-base font-semibold"
            >
              <FaEnvelope className="mr-1 text-[#f47a2a] w-3 h-3 sm:w-4 sm:h-4" />
              <span>trekkinginindia@gmail.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="hover:text-[#f47a2a] transition-colors flex items-center text-[10px] sm:text-sm md:text-base font-semibold"
            >
              <FaPhone className="mr-1 text-[#f47a2a] w-3 h-3 sm:w-4 sm:h-4" />
              +1 (234) 567-890
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-3">
              <a href="#" className="hover:text-[#f47a2a]transition-colors text-lg md:text-xl text-[#f47a2a]">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-[#f47a2a]transition-colors text-lg md:text-xl text-[#f47a2a]">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-[#f47a2a]transition-colors text-lg md:text-xl text-[#f47a2a]">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </nav> */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""} `}>
        <div className="navbar-container max-w-7xl mx-auto px-4 md:px-8">
          <div className="logo">
            <Link href="/">
              <img src="/images/logo.webp" alt="Adventure Logo" />
            </Link>
          </div>

          <div
            className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FaTimes className="close-icon" />
            ) : (
              <>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </>
            )}
          </div>

          <ul className="nav-links">
            <li
              className="mega-dropdown"
              onMouseEnter={() => {
                if (!isMobile) {
                  setActiveDropdown("Trekking Tours");
                  setHoveredNavItem("Trekking Tours");
                }
              }}
              onMouseLeave={() => {
                if (!isMobile && hoveredNavItem !== "Trekking Tours") {
                  setHoveredNavItem(null);
                }
              }}
            >
              <span className={`nav-link ${hoveredNavItem === "Trekking Tours" ? "active" : ""}`} style={{ display: "flex", alignItems: "center" }}>
                Trekking Tours <FaChevronDown />
              </span>
              {activeDropdown === "Trekking Tours" && renderMegaMenu("Trekking Tours")}
            </li>

            <li
              className="mega-dropdown"
              onMouseEnter={() => {
                if (!isMobile) {
                  setActiveDropdown("Climbing");
                  setHoveredNavItem("Climbing");
                }
              }}
              onMouseLeave={() => {
                if (!isMobile && hoveredNavItem !== "Climbing") {
                  setHoveredNavItem(null);
                }
              }}
            >
              <span className={`nav-link ${hoveredNavItem === "Climbing" ? "active" : ""}`} style={{ display: "flex", alignItems: "center" }}>
                Peak Climbing Expedition <FaChevronDown />
              </span>
              {activeDropdown === "Climbing" && renderMegaMenu("Climbing")}
            </li>
            <li
              className="mega-dropdown"
              onMouseEnter={() => {
                if (!isMobile) {
                  setActiveDropdown("Biking");
                  setHoveredNavItem("Biking");
                }
              }}
              onMouseLeave={() => {
                if (!isMobile && hoveredNavItem !== "Biking") {
                  setHoveredNavItem(null);
                }
              }}
            >
              <span className={`nav-link ${hoveredNavItem === "Biking" ? "active" : ""}`} style={{ display: "flex", alignItems: "center" }}>
                Biking Tours <FaChevronDown />
              </span>
              {activeDropdown === "Biking" && renderMegaMenu("Biking")}
            </li>

            <li>
              <Link className="nav-link" href="/jeep-safari-tours">
                Jeep Safari Tours
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/about">
                About Us
              </Link>
            </li>
          </ul>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="mobile-menu"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween' }}
              >
                <div className="mobile-menu-header">
                  <div className="logo">
                    <img src="/images/logo.webp" alt="Adventure Logo" />
                  </div>
                  <FaTimes
                    className="close-icon"
                    onClick={() => setMobileMenuOpen(false)}
                  />
                </div>

                <div className="mobile-menu-content">
                  <div className="accordion-item">
                    <div
                      className="accordion-header"
                      onClick={() => toggleMobileAccordion("trekking")}
                    >
                      <span>Trekking Tours</span>
                      <FaChevronDown className={`accordion-icon ${openMobileAccordion === "trekking" ? "open" : ""}`} />
                    </div>
                    <AnimatePresence>
                      {openMobileAccordion === "trekking" && (
                        <motion.div
                          className="accordion-content"
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="accordion-content-inner">
                            {megaMenuData.slice(0, 6).map((section, idx) => (
                              <div key={idx} className="mobile-menu-section">
                                {section.links[2] && (
                                  <Link href={section.links[2].href}>
                                    <h4>{section.title}</h4>
                                  </Link>
                                )}

                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="accordion-item">
                    <div
                      className="accordion-header"
                      onClick={() => toggleMobileAccordion("climbing")}
                    >
                      <span>Peak Climbing Expedition</span>
                      <FaChevronDown className={`accordion-icon ${openMobileAccordion === "climbing" ? "open" : ""}`} />
                    </div>
                    <AnimatePresence>
                      {openMobileAccordion === "climbing" && (
                        <motion.div
                          className="accordion-content"
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="accordion-content-inner">
                            {megaMenuData.slice(6, 11).map((section, idx) => (
                              <div key={idx} className="mobile-menu-section">
                                {section.links[2] && (
                                  <Link href={section.links[2].href}>
                                    <h4>{section.title}</h4>
                                  </Link>
                                )}


                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>


                  <div className="accordion-item">
                    <div
                      className="accordion-header"
                      onClick={() => toggleMobileAccordion("biking")}
                    >
                      <span>Biking Tours</span>
                      <FaChevronDown className={`accordion-icon ${openMobileAccordion === "biking" ? "open" : ""}`} />
                    </div>
                    <AnimatePresence>
                      {openMobileAccordion === "biking" && (
                        <motion.div
                          className="accordion-content"
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="accordion-content-inner">
                            {megaMenuData.slice(11).map((section, idx) => (
                              <div key={idx} className="mobile-menu-section">
                                {section.links[2] && (
                                  <Link href={section.links[2].href}>
                                    <h4>{section.title}</h4>
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link href="/jeep-safari-tours" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
                    Jeep Safari Tours
                  </Link>
                  <Link href="/about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
                    About Us
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navbar;