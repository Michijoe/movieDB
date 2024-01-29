import React from 'react';
import { Grid } from '@mui/material';

import Movie from '../Movie/Movie';

function MovieList({ movies }) {
  return (
    <Grid
      container
      className="flex flex-wrap justify-center md:justify-between overflow-auto py-2"
    >
      {movies.results.map((movie, index) => (
        <Movie key={index} movie={movie} index={index} />
      ))}
    </Grid>
  );
}

export default MovieList;
