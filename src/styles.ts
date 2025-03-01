import styled, { createGlobalStyle } from 'styled-components';

// Solarized Light theme colors
export const colors = {
  base03: '#002b36',
  base02: '#073642',
  base01: '#586e75',
  base00: '#657b83',
  base0: '#839496',
  base1: '#93a1a1',
  base2: '#eee8d5',
  base3: '#fdf6e3',
  yellow: '#b58900',
  orange: '#cb4b16',
  red: '#dc322f',
  magenta: '#d33682',
  violet: '#6c71c4',
  blue: '#268bd2',
  cyan: '#2aa198',
  green: '#859900'
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.base3};
    color: ${colors.base00};
    font-family: Monaco, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
  color: ${colors.blue};
  text-align: center;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 200px;
  padding: 0.5rem;
  margin: 0 auto 2rem;
  border: 2px solid ${colors.base1};
  border-radius: 4px;
  background-color: ${colors.base2};
  color: ${colors.base01};
  font-size: 1rem;
  display: block;
  text-align: center;
  
  &:focus {
    outline: none;
    border-color: ${colors.blue};
  }
`;

export const ColumnsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`;

export const Column = styled.div`
  background-color: ${colors.base2};
  border-radius: 8px;
  padding: 1rem;
`;

export const ColumnTitle = styled.h2`
  color: ${colors.violet};
  text-align: center;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

export const WordList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const WordItem = styled.li`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: ${colors.base3};
  border-radius: 4px;
  color: ${colors.base01};
  text-align: center;
  
  &:hover {
    background-color: ${colors.base1};
  }
`;

export const Button = styled.button`
  background-color: ${colors.blue};
  color: ${colors.base3};
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  
  &:hover {
    background-color: ${colors.violet};
  }
  
  &:disabled {
    background-color: ${colors.base1};
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  color: ${colors.red};
  text-align: center;
  margin: 1rem 0;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: ${colors.base2};
`; 