import { Searchbar } from 'components/Searchbar/Searchbar';
import { TrendingList } from 'components/TrendingList/TrendingList';
import { fetchMovieByKeyWord } from 'helpers/api';
import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { query } = params;

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const fetchKeyWord = async () => {
      try {
        const { results } = await fetchMovieByKeyWord(query);

        if (results.length === 0) {
          return toast.error(`Nothing found for ${query}!`);
        }

        setMovies(results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchKeyWord();
  }, [query]);

  const handleSubmit = newQuery => {
    if (newQuery.trim() === '') {
      toast(`Please, enter the movie name for searching!`, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }
    const checkedQuery = newQuery !== '' ? { query: newQuery } : {};
    setSearchParams(checkedQuery);
  };

  return (
    <main>
      <Toaster position="top-right" reverseOrder={false} />
      <Searchbar onSubmit={handleSubmit} />
      {movies.length > 0 && <TrendingList movies={movies} />}
    </main>
  );
};

export default Movies;
