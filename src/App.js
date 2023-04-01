import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import theme from './theme';
import './styles/fonts.css';





function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <Home />
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
