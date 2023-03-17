import { AuthorTitle } from 'components/Reviews/Reviews.styled';
import { fetchMovieCast } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Item, List } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setActors(cast);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <section>
      <List>
        {actors.length > 0 ? (
          actors.map(({ credit_id, name, character, profile_path }) => (
            <Item key={credit_id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `https://www.kitshouse.org/wp-content/uploads/2019/09/no-image-1.jpg`
                }
                alt={name}
                width={200}
              />
              <div>
                <AuthorTitle>{name}</AuthorTitle>
                <p>Character: {character ? character : 'unknown'}</p>
              </div>
            </Item>
          ))
        ) : (
          <p>We don`t have any information about cast of this movie.</p>
        )}
      </List>
    </section>
  );
};

export default Cast;
