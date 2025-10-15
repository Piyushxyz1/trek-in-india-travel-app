"use client"
import React, { useState } from 'react';

import './itinerarypage.css';
import { FaArrowLeft } from 'react-icons/fa';
import ImageModalContent from '../modalImagescontent/ImageModalContent';

const ImageGrid = ({ images, activities }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  if (!images || images.length < 5) {
    return <div>Please provide at least 5 images</div>;
  }

  const handleImageClick = (image, index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
    setActiveTab('all'); // open modal directly in "image" tab
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    setSelectedImageIndex((prevIndex) =>
      direction === 'prev'
        ? (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
        : (prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    );
  };

  return (

    <section className='image-grid-section'>
    <div className="image-grid-container max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 mb-8">
      <h2>Media Gallery</h2>
      <span>Frozen River Chadar Trek Photos</span>
      <div className="image-grid">
        <div className="large-image" onClick={() => handleImageClick(images[0], 0)}>
          <img src={images[0]} alt="Main" />
        </div>

        <div className="small-images">
          {images.slice(1, 5).map((image, index) => (
            <div
              key={`small-${index}`}
              className="small-image"
              onClick={() => handleImageClick(image, index + 1)}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className={`modal ${isModalOpen ? 'modal-open' : ''}`}
          style={{
            backgroundColor: activeTab === 'image' ? 'rgba(0, 0, 0, 0.8)' : 'white',
            color: activeTab === 'image' ? '#fff' : '#000',
          }}
        >
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              <FaArrowLeft /> Back
            </button>

            <div className="modal-tabs">
              <button
                className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Images ({images.length})
              </button>
              <button
                className={`tab-button ${activeTab === 'activities' ? 'active' : ''}`}
                onClick={() => setActiveTab('activities')}
              >
                Activities
              </button>
            </div>

            <div className="tab-content">

              {activeTab === 'all' && (
                <ImageModalContent
                  images={images}
                  activities={activities}
                  onSelectImage={(index) => {
                    setSelectedImageIndex(index);
                    setActiveTab('image');
                  }}
                />
              )}

              {activeTab === 'activities' && (
                <div className="activities-tab">
                  {activities && activities.length > 0 ? (
                    <ul className="activities-list">
                      {activities.map((activity, index) => (
                        <li key={`activity-${index}`} className="activity-item">
                          <h3>{activity.title}</h3>
                          <p>{activity.description}</p>
                          <span className="activity-date">{activity.date}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No activities available</p>
                  )}


                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
    </section>
  );
};

export default ImageGrid;
