import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #ff6b6b;
  margin-bottom: 20px;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

export const HomeButton = styled(Link)`
  padding: 12px 24px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.2rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;