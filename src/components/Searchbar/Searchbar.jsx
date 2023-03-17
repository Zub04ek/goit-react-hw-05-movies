import { Button, Input, SearchForm } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    onSubmit(form.elements.query.value.toLowerCase());
    form.reset();
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input type="text" name="query" />
      <Button type="submit">
        <BsSearch />
      </Button>
    </SearchForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
