import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { BackLink } from 'components/BackLink/BackLink';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { fetchMovieById } from 'helpers/api';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState('');
  const [userScore, setUserScore] = useState();

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? `/movies`);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const film = await fetchMovieById(movieId);
        setMovie(film);
        const genres = film.genres.map(({ name }) => name).join(', ');
        setGenres(genres);
        setUserScore(film.vote_average);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovie();
  }, [movieId]);

  const userVote = useMemo(() => {
    return Math.round(userScore * 10);
  }, [userScore]);

  return (
    <main>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      <MovieCard movie={movie} userVote={userVote} genres={genres} />
      <AdditionalInfo />
      <Suspense fallback={<div>Loading... </div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
