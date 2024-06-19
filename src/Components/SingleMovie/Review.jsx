// src/ReviewDisplayPage.js

import React, { useState, useEffect } from 'react';

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch data or use mock data
    const mockReviews = [
      {
        id: 1,
        moviePoster:"https://th.bing.com/th?id=OIP.tIicFc_jhz6Vzg9D5XTygQHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        title: 'Adipoli Movie',
        rating: 5,
        content: 'A mind-bending thriller with stunning visuals and a complex plot.',
        author: 'Arun Das',
        date: '2024-06-18',
      },
      {
        id: 2,
        moviePoster:"https://th-i.thgim.com/public/entertainment/movies/bd86fm/article67920016.ece/alternates/FREE_1200/Manjummel%20Boys%20100%20crores.jpg",
        title: 'Interstellar',
        rating: 4.5,
        content: 'A profound exploration of space and time, combined with a touching human story.',
        author: 'Jane Smith',
        date: '2024-06-17',
      },
      // Add more mock reviews as needed
    ];
    setReviews(mockReviews);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">Movie Reviews</h1>
      <div className="max-w-4xl mx-auto">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-600">No reviews available.</p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded shadow-md mb-6">
              <img className='w-36' src={review.moviePoster} alt="" />
              <h2 className="text-2xl font-bold text-gray-900">{review.title}</h2>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 mr-2">{`⭐ ${review.rating}`}</span>
                <span className="text-gray-600">{`by ${review.author} on ${new Date(review.date).toLocaleDateString()}`}</span>
              </div>
              <p className="text-gray-700 mt-4">{review.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Review;
