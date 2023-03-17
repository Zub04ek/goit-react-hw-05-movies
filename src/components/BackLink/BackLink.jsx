import { TiArrowBack } from 'react-icons/ti';
import { StyledLink } from './BackLink.styled';
import PropTypes from 'prop-types';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <TiArrowBack size="24" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.shape({
    current: PropTypes.object,
  }).isRequired,
  children: PropTypes.node.isRequired,
};
