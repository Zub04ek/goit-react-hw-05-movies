import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  width: 100%;
  max-width: 400px;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid orangered;
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;
`;
