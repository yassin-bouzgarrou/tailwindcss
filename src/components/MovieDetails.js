import React from 'react';

const MovieDetails = ({ movie }) => {
    console.log(movie,'fromdetials ');
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-screen-lg mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">{movie.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <img
              src={movie.posterURL}
              alt={movie.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div>
            <p className="text-gray-600">Release Date: {movie.releaseDate}</p>
            <p className="text-gray-600">Genre: {movie.genre}</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Description</h3>
            <p className="text-gray-700">{movie.description}</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Actors</h3>
            <ul className="list-disc pl-4">
              {movie.actors.map((actor, index) => (
                <li key={index}>{actor}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
