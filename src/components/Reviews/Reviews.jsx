import { fetchMovieReviews } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthorTitle, List } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReview();
  }, [movieId]);

  return (
    <section>
      <List>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <AuthorTitle>Author: {author}</AuthorTitle>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don`t have any reviews for this movie.</p>
        )}
      </List>
    </section>
  );
};

export default Reviews;
