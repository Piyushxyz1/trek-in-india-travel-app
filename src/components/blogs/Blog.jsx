import { useEffect } from 'react';
import Link from 'next/link'
import React from 'react'

const Blog = ({ post }) => {

  
  return (

    <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <Link href={`/${post.slug}`}>
      <div className="h-48 overflow-hidden">

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />

      </div>
      <div className="p-3">
        <span className="text-xs font-medium text-[#f47a2a] uppercase tracking-wider">{post.category}</span>
        <h3 className="text-lg font-semibold text-[#172541] mt-1 mb-2 hover:text-[#f47a2a] transition-colors">
          {post.title}
        </h3>
        <p className="text-[#313137] text-sm mb-3">{post.excerpt}</p>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>{post.date}</span>
          <span className="text-[#f47a2a] hover:text-[#172541] font-medium transition-colors">
            Read More →
          </span>
        </div>
      </div>
        </Link>
    </div>
  )
}

export default Blog