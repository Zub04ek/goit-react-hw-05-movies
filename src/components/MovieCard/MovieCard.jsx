import { Card, CardInfo } from './MovieCard.styled';
import PropTypes from 'prop-types';

export const MovieCard = ({ movie, userVote, genres }) => {
  return (
    <Card>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : `https://screench.com/upload/no-poster.jpeg`
        }
        alt={movie.title}
        width={300}
      />
      <CardInfo>
        <h2>{movie.title}</h2>
        <p>User score: {userVote}%</p>
        <h3>Overview</h3>
        {movie.overview ? (
          <p>{movie.overview}</p>
        ) : (
          <p>There is no description for this movie!</p>
        )}
        <h3>Genres</h3>
        <p>{genres ? genres : 'Other'}</p>
      </CardInfo>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
  }).isRequired,
  userVote: PropTypes.number.isRequired,
  genres: PropTypes.string.isRequired,
};
