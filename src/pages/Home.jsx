import { TrendingList } from 'components/TrendingList/TrendingList';
import { TitlePage } from 'components/TrendingList/TrendingList.styled';
import { fetchTrendingMovies } from 'helpers/api';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovies();
  }, []);

  return (
    <main>
      <TitlePage>Trending today</TitlePage>
      <TrendingList movies={movies} />
    </main>
  );
};

export default Home;
