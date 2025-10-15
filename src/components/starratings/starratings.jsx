
"use client"
import React from 'react';

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export const renderStars = (rating) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} color="#ffc107" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} color="#ffc107" />);
    } else {
      stars.push(<FaRegStar key={i} color="#ccc" />);
    }
  }

  return stars;
};
