import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  width: 300px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
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