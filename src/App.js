import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chart from 'chart.js/auto'

import Login from './pages/Login/Login';
import Home from './pages/Home/Home'
import Navigation from './components/Navigation/Navigation';
import NoPage from './pages/NoPage/NoPage';

Chart.register();

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index path='/login' element={<Login />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
