import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RepoList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const RepoItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

export const RepoLink = styled(Link)`
  display: block;
  padding: 8px 0;
  color: #0366d6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;