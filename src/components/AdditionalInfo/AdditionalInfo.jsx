import { InfoBox, InfoLink, List } from './AdditionalInfo.styled';

export const AdditionalInfo = () => {
  return (
    <InfoBox>
      <h3>Additional information</h3>
      <List>
        <li>
          <InfoLink to="cast">Cast</InfoLink>
        </li>
        <li>
          <InfoLink to="reviews">Reviews</InfoLink>
        </li>
      </List>
    </InfoBox>
  );
};
