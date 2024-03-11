/* eslint-disable max-len */

import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => {
        return <MovieCard movie={movie} key={movie.imdbId} />;
      })}
    </div>
  );
};
