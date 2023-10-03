import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import MovieDetails from './MovieDetails'

function MovieList() {
    const movies =useSelector((state)=>state.movie.movies)
    console.log(movies,"the satet")
    const [selectedMovie, setSelectedMovie] = useState(null);
    const handleMovieClick = (para) => {
        console.log('selected');
        setSelectedMovie(para);
      };
  return (
//     <div className="container mx-auto px-4 py-6">
//     <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 lg:max-w-7xl lg:px-8">
//       <h2 className="text-3xl font-semibold text-gray-800 mb-6">Related Movies</h2>

//       <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//         {movies.map((movie) => (
//           <div key={movie.title} className="group relative">
//             <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//               <img
//                 src={movie.posterURL}
//                 alt={movie.title}
//                 className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                
//               />
//             </div>
//             <div className="mt-4 flex justify-between">
//               <div>
//                 <h3 className="text-sm text-gray-700">
//                   <a href="#" className="hover:underline">
//                     <span aria-hidden="true" className="absolute inset-0" />
//                     {movie.title}
//                   </a>
//                 </h3>
//                 <p className="mt-1 text-sm text-gray-500">{movie.genre}</p>
//               </div>
//               <p className="text-sm font-medium text-gray-900">{movie.releaseDate}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>)
 <div className="container mx-auto px-4 py-6">
<h2 className="text-3xl font-semibold text-gray-800 mb-6">Movie Catalog</h2>
<div className="grid grid-cols-4 gap-6">
  {movies.map((movie,id) => (
    <div
      key={id}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg"
    >
      <img
       className="w-48 h-72 object-cover object-center"
        src={movie.posterURL}
        alt={movie.title}
       
      />
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800" onClick={() => handleMovieClick(movie)}>{movie.title}</h3>
        <p className="text-gray-600">{movie.releaseDate}</p>
        <p className="mt-2 text-gray-700">{movie.description}</p>
         <div className="mt-4 flex justify-between items-center">
           <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
           onClick={()=>console.log("clicked")} >
             View Details
           </button>
           <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
           onClick={()=>console.log("clicked")}>
             Add to Favorites
           </button>
         </div>
       </div>
     </div>
  ))}
  
 </div>
 {selectedMovie && <MovieDetails movie={selectedMovie} />}
</div> )
  
}

export default MovieList