// src/components/MovieCard.js

import React from 'react';

const Cards = ({ movies }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={movies.poster} alt={movies.title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{movies.title}</h3>
        <p className="text-sm text-gray-700">Directed by: {movies.director}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400">&#9733;</span>
          <span className="ml-1 text-gray-600">{movies.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Cards
