import { Box } from '@mui/system';
import { Header } from './components/Header';
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home';
import { BeerDetails } from './pages/BeerDetails';
import './scss/app.scss'
function App() {
  return (
    <Box sx={{ backgroundColor: '#494D4e', pr: 2, pb: 10 }}>
      <Link style={{ textDecoration: 'none' }} to={'/'}><Header /></Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers/:id' element={<BeerDetails />} />
      </Routes>
    </Box>
  );
}

export default App;
