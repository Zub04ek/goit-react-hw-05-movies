import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const InfoBox = styled.div`
  padding: 0px 16px;
  margin-bottom: 24px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 12px;
  width: 200px;
  gap: 12px;
`;

export const InfoLink = styled(NavLink)`
  font-weight: 500;
  text-decoration: none;
  color: black;

  &.active {
    color: orangered;
  }
`;
