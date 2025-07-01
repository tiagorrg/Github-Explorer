import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 30px;
`;

export const Header = styled.header`
  background-color: #24292e;
  padding: 15px 20px;
  margin-bottom: 30px;
  grid-column: 1 / -1;
`;

export const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Sidebar = styled.aside`
  display: flex;
  gap: 10px;
  flex-direction: column-reverse;
  justify-content: flex-end;
`;

export const HistoryLink = styled(Link)`
  color: #0366d6;
  text-decoration: none;
  padding: 8px 0;
  transition: color 0.2s;

  &:hover {
    color: #0550ae;
    text-decoration: underline;
  }
`;

export const HistoryTitle = styled.h1`
  order: 1;
`

export const MainContent = styled.main`
  padding-left: 20px;
  border-left: 1px solid #e1e4e8;
`;