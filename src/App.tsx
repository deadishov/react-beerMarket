import React from 'react';
import { Box } from '@mui/system';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';

function App() {
  return (
    <Box sx={{ backgroundColor: '#494D4e', pr: 2, pb: 10 }}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
