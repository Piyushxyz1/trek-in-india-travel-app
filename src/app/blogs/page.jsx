"use client"
import React, { useState } from 'react';
import Banner from '@/components/banners/Banner';
import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
import Blog from '@/components/blogs/Blog';
import { BlogsList } from '@/components/blogs/blogposts/bloglist';

const Blogs = () => {
  const breadcrumbPath = [
    { label: 'blogs' },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9; // Show 9 blogs per page

  // Calculate current blogs to display
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = BlogsList.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(BlogsList.length / blogsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Banner title="Blogs" image="/images/cycling-tour-banner.jpg" />
      <Breadcrumb path={breadcrumbPath} />

      <section className="destinations-page__section ">
        <div className='w-full max-w-3xl md:max-w-4xl xl:max-w-7xl px-4 py-8 mx-auto md:px-10 '>
          <h2 className="text-xl sm:text-2xl xl:text-4xl font-semibold text-[#172541] mt-0 mb-6 md:mb-8 lg:mb-10"> Blogs</h2>
          <p className="mt-2 mb-8 text-[#313137] ">
            Explore our collection of cycling blogs covering everything from route guides to gear reviews and training tips. 
            Whether you're planning a Himalayan expedition or a casual countryside ride, we've got insights to enhance your journey.
          </p>

          {/* 3-column blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentBlogs.map(post => (
              <Blog key={post.id} post={post}/>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 ">
            <nav className="flex items-center space-x-2">
              <button 
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded border ${currentPage === 1 ? 'border-gray-200 text-gray-400 cursor-not-allowed' : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-[#f47a2a] text-white' : 'border border-gray-300 text-gray-600 hover:bg-gray-100'}`}
                >
                  {i + 1}
                </button>
              ))}
              
              <button 
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded border ${currentPage === totalPages ? 'border-gray-200 text-gray-400 cursor-not-allowed' : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogs;