import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 0;
  margin-bottom: 32px;
  list-style: none;
`;

export const Item = styled.li`
  position: relative;
  width: calc((100% - 54px) / 4);
  display: flex;
`;

export const Image = styled.img`
  width: 100%;
  height: 331px;
  object-fit: cover;
  margin-bottom: 12px;
`;

export const TitlePage = styled.h2`
  text-align: center;
  margin: 16px 0px;
`;

export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: black;
`;
