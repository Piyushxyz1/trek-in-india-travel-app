"use client"
import React, { useState } from 'react';
import "../trekitinerarydetails/itinerarypage.css"
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const ImageModalContent = ({ images, activities }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
      newIndex = (currentIndex + 1) % images.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <section className="section-image-galleries">
      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map((image, index) => (
            <article key={index} className="gallery-card">
              <div
                className="gallery-item"
                onClick={() => openLightbox(image, index)}
                role="button"
                tabIndex={0}
              >
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  loading="lazy"
                  className="gallery-image"
                />
                <div className="image-overlay">
                  <p className="image-caption">{image.caption}</p>
                  <span className="zoom-hint">Click to enlarge</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {selectedImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="lightbox-nav prev"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('prev');
                }}
                aria-label="Previous image"
              >
                <FaChevronLeft style={{ color: '#172541' }} />
              </button>

              <img
                src={selectedImage}
                alt={images[currentIndex].alt}
                className="lightbox-image"
              />

              <div className="lightbox-caption">
                {images[currentIndex].caption}
                <span className="image-counter">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>

              {/* Thumbnail Slider */}
             

              <button
                className="lightbox-nav next"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('next');
                }}
                aria-label="Next image"
              >
                <FaChevronRight style={{ color: '#172541' }} />
              </button>

              <button
                className="lightbox-close"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                &times;
              </button>
            </div>
          
         <div className="thumbnail-slider">
                {images.map((image, index) => (
                  <div
                    key={`thumb-${index}`}
                    className={`thumbnail-item ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => {
                      setCurrentIndex(index);
                      setSelectedImage(image);
                    }}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} />
                  </div>
                ))}
              </div>
              </div>
          
        )}


        
        
      </div>
    </section>
  );
};

export default ImageModalContent;
