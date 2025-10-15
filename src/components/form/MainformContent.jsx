'use client';
import React, { useState, useEffect } from 'react';
import ModalPortal from '../ModalPortal';
import TripBookingForm from './TripBookingForm';

const MainformContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }

    return () => {
      document.body.classList.remove('body-no-scroll');
    };
  }, [isOpen]);

  return (
    <div className="booking-form mt-6">
      <div className="form-cta-section modern-cta">
        <div className="form-cta-ribbon premium-badge">
          <span>🥾 Best Trekking Experience Guaranteed</span>
        </div>

        <div className="form-cta-content">
          <div className="pricing-header">
            <h3>Ultimate Himalayan Trekking Adventure</h3>
            <p className="package-description">
              Join us on an unforgettable journey through majestic mountains, serene valleys, and vibrant local cultures.
            </p>
          </div>

          <div className="price-container">
            <p className="price-tag">
              ₹35,000 <span className="price-unit">INR</span>
            </p>
            <p className="price-note">per person (group size 6-10 trekkers)</p>
          </div>

          <div className="package-details">
            <div className="detail-item">
              <svg className="detail-icon" viewBox="0 0 24 24">
                <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
              </svg>
              <span>10 Days Trekking Expedition</span>
            </div>
            <div className="detail-item">
              <svg className="detail-icon" viewBox="0 0 24 24">
                <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
              </svg>
              <span>Certified Mountain Guides</span>
            </div>
            <div className="detail-item">
              <svg className="detail-icon" viewBox="0 0 24 24">
                <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
              </svg>
              <span>All Meals & Camping Equipment</span>
            </div>
            <div className="detail-item">
              <svg className="detail-icon" viewBox="0 0 24 24">
                <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
              </svg>
              <span>Emergency Medical Support</span>
            </div>
          </div>

          <div className="cta-actions">
            <button onClick={openModal} className="form-book-trip-button primary-cta">
              BOOK THIS TREK
            </button>
            <a href="tel:+911234567890" className="secondary-cta">
              CALL GUIDE
            </a>
          </div>

          <div className="trust-badges">
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z" />
              </svg>
              <span>Trusted Trek Operator</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24">
                <path d="M12,15A2,2 0 0,1 10,13A2,2 0 0,1 12,11A2,2 0 0,1 14,13A2,2 0 0,1 12,15M12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z" />
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <ModalPortal>
          <TripBookingForm closeModal={closeModal} />
        </ModalPortal>
      )}
    </div>
  );
};

export default MainformContent;
