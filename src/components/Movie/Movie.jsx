import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

function Movie({ movie, index }) {
  return (
    <Grid item xs={12} sm={6} md={3} className="p-3">
      <Grow in key={index} timeout={(index + 1) * 250}>
        <Link className="flex sm:flex-col items-center hover:cursor-pointer" to={`/movie/${movie.id}`}>
          <img
            alt={movie.title}
            className="rounded-xl mb-3 hover:scale-105 duration-300"
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://via.placeholder.com/500x750.png'}
          />
          <Typography className="overflow-hidden text-center whitespace-nowrap overflow-ellipsis w-[-webkit-fill-available]" variant="h5">{movie.title}</Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
}

export default Movie;
