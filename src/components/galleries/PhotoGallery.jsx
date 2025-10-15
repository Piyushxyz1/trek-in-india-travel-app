"use client"
import React, { useState } from 'react';

const PhotoGallery = () => {
  const images = [
    { src: '/images/trek-photo-1.jpeg', alt: 'Mountain View', caption: 'Breathtaking Mountain View' },
    { src: '/images/trek-photo-2.jpeg', alt: 'Forest Trail', caption: 'Serene Forest Trail' },
    { src: '/images/trek-photo-3.jpeg', alt: 'Sunset Peak', caption: 'Golden Sunset Over Peaks' },
    { src: '/images/trek-photo-4.jpeg', alt: 'Riverside Camp', caption: 'Peaceful Riverside Camping' },
    { src: '/images/trek-photo-5.jpeg', alt: 'Snowy Path', caption: 'Walking Through Snowy Trails' },
    { src: '/images/trek-photo-5.jpeg', alt: 'Hilltop View', caption: 'Majestic View from the Top' },
    { src: '/images/trek-photo-5.jpeg', alt: 'Hilltop View', caption: 'Majestic View from the Top' },
    { src: '/images/trek-photo-5.jpeg', alt: 'Hilltop View', caption: 'Majestic View from the Top' },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (imageSrc, index) => {
    setSelectedImage(imageSrc);
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
    setSelectedImage(images[newIndex].src);
  };

  return (
    <section className="bg-white py-12">
      <div className="container   max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <span className="text-[#f47a2a] font-semibold text-[0.8rem] md:[text-0.9rem] xl:text-[1rem]">Image Galleries</span>
          <h2 className="text-xl sm:text-2xl  xl:text-4xl  font-semibold text-[#172541] mt-0 mb-2">
            Explore the Beauty of Nature
          </h2>
          <p className="text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] text-[#313137] mb-2 md:mb-4 max-w-3xl mx-auto">
            Journey through stunning landscapes captured during our treks across untouched wilderness.
            Each photograph tells a story of adventure, serenity, and the raw beauty of nature.
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => openLightbox(image.src, index)}
            >
              <div className="w-full h-[70px] md:h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-medium">{image.caption}</p>
                <span className="text-white/80 text-sm">Click to enlarge</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation Arrows */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full  p-1 md:p-2 xl:p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('prev');
                }}
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className=" h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Main Image */}
              <div className="flex justify-center items-center">
                <img
                  src={selectedImage}
                  alt={images[currentIndex].alt}
                  className=" max-h-[200px]  sm:max-h-[300px] md:max-h-[50vh] max-w-3xl rounded-lg object-contain"
                />
              </div>

              {/* Caption and Counter */}
              <div className="text-center mt-4 text-white">
                <p>{images[currentIndex].caption}</p>
                <span className="text-white/70 text-sm">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>

              {/* Next Button */}
              <button
                className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 bg-white rounded-full   p-1 md:p-2 xl:p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('next');
                }}
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Close Button */}
              <button
                className="absolute top-[-30px]   md:-top-12 right-2 md:right-0 text-white text-3xl hover:text-gray-300 transition-colors"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                &times;
              </button>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;