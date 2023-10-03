import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import TestFile from './components/TestFile';

function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path="/"  element={<MovieList/>} />
    



    </Routes>
    </BrowserRouter>
  );
}

export default App;
