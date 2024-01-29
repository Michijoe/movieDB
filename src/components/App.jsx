import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Actors, MovieInformation, Movies, NavBar, Profile } from './index';

function App() {
  return (
    <div className="flex h-full">
      <CssBaseline />
      <NavBar />
      <main className="flex-grow p-6 my-16">
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="movie/:id" element={<MovieInformation />} />
          <Route path="actors/:id" element={<Actors />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
