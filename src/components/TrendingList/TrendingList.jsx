import { useLocation } from 'react-router-dom';
import { Image, Item, List, MovieLink } from './TrendingList.styled';
import PropTypes from 'prop-types';

export const TrendingList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <Item key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <Image
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w200${poster_path}`
                  : `https://screench.com/upload/no-poster.jpeg`
              }
              alt={title}
            />
            <p>{title}</p>
          </MovieLink>
        </Item>
      ))}
    </List>
  );
};

TrendingList.propTypes = {
  movies: PropTypes.array.isRequired,
};
