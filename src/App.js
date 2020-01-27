import React from 'react';
import Header from './components/Header';
import SearchInput from './components/common/SearchInput';
import useGlobalStyle from './hooks/useGlobalStyle';
import Container from './components/common/Container';

export default function App() {
  const GlobalStyle = useGlobalStyle();

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <SearchInput />
      </Container>
    </>
  );
}
