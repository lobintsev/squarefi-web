import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Legal from './components/Legal';
import theme from './theme';
import './styles/fonts.css';





function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
     
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
