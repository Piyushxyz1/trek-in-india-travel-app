import React, { useState } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { reviews } from './customerreviewdata';


const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fefAf7]">
      <div className=' max-w-4xl md:max-w-6xl xl:max-w-7xl mx-auto py-8 px-4 md:px-8 '>
        <div className="text-center mb-12">
          <span className="text-[#f47a2a] font-semibold text-[0.8rem] md:[text-0.9rem] xl:text-[1rem]">Customer Reviews</span>
          <h2 className="text-xl sm:text-2xl  xl:text-4xl  font-semibold text-[#172541] mt-0 mb-2">
            What Our Customers Say
          </h2>
          <p className="max-w-2xl mx-auto  mt-2 mb-4 text-[#313137] sm:mt-2 text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
            Trusted by thousands of businesses worldwide
          </p>
        </div>

        <div className="relative  mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="bg-white p-8  relative rounded-md shadow-lg">
                <FaQuoteLeft className="text-[#f47a2a] text-3xl absolute top-2 left-2 " />
                <div className="flex items-center mb-6 mt-6 max-w-3xl mx-auto">
                  <img
                    src={reviews[currentIndex].avatar}
                    alt={reviews[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {reviews[currentIndex].name}
                    </h4>
                    <p className="text-[#313137]">{reviews[currentIndex].role}</p>
                  </div>
                </div>
                <p className="text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] text-[#313137]  mb-6 max-w-3xl mr-4 text-justify">
                  {reviews[currentIndex].content}
                </p>
                <FaQuoteRight className='text-[#f47a2a] text-3xl absolute bottom-2 right-2' />

                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-xl ${i < reviews[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            <button
              onClick={prevReview}
              className=" text-white absolute left-[5%] top-[40%] -translate-y-1/2 -ml-4  bg-[#f47a2a] rounded-full p-2
               cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.2)]
               transition-transform duration-300 ease-in-out
               h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[45px] md:w-[45px] lg:h-[42px] lg:w-[42px] xl:h-[50px] xl:w-[50px] 
               flex justify-center items-center gap-2
               border border-[#f47a2a]
               hover:scale-110 hover:bg-white hover:text-[#f47a2a]"
              aria-label="Previous review"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextReview}
              className=" text-white absolute right-[5%] top-[40%] -translate-y-1/2 -mr-4 ]
               bg-[#f47a2a] rounded-full p-2
               cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.2)]
               transition-transform duration-300 ease-in-out
               h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[45px] md:w-[45px] lg:h-[42px] lg:w-[42px] xl:h-[50px] xl:w-[50px] 
               flex justify-center items-center gap-2
               border border-[#f47a2a]
               hover:scale-110 hover:bg-white hover:text-[#f47a2a]"
              aria-label="Next review"
            >
              <FaChevronRight />
            </button>
          </div>


          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#f47a2a]' : 'bg-gray-300'}`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:grid mt-16 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-lg ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] text-[#313137] mb-6">{review.content}</p>
              <div className="flex items-center">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="text-sm font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] text-[#313137]">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;