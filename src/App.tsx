import React from 'react';
import { Box } from '@mui/system';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';

function App() {
  return (
    <Box sx={{ backgroundColor: '#654321' }}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
