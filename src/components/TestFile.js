import React from 'react'
import movies from '../data/mockData'

export default function TestFile() {
    const products = [
        {
            id: 1,
            name: 'Earthen Bottle',
            href: '#',
            price: '$48',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
          },
          {
            id: 2,
            name: 'Nomad Tumbler',
            href: '#',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
          },
          {
            id: 3,
            name: 'Focus Paper Refill',
            href: '#',
            price: '$89',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
          {
            id: 4,
            name: 'Machined Mechanical Pencil',
            href: '#',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          },
        // More products...
      ]
  return (
    <div className="container mx-auto px-4 py-6">
    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Movie Catalog</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <div
          key={movie.title}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg"
        >
          <img
            src={movie.posterURL}
            alt={movie.title}
            className="w-full h-72 object-cover object-center"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{movie.title}</h3>
            <p className="text-gray-600">Release Date: {movie.releaseDate}</p>
            <p className="text-gray-600">Genre: {movie.genre}</p>
            <p className="mt-2 text-gray-700">{movie.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                View Details
              </button>
              <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
                Add to Favorites
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  )
}
