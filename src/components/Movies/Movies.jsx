import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

import { useGetMoviesQuery } from '../../services/TMDB';
import MovieList from '../MovieList/MovieList';

function Movies() {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);

  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });

  if (isFetching) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Typography variant="h4" className="text-center mt-4">
        No movies found
        <br />
        Try searching for another movie.
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography variant="h4" className="text-center mt-4">
        Error fetching movies
        <br />
        Try again later.
      </Typography>
    );
  }

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
}
export default Movies;
