import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import GenrePage from './pages/data/Genre';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        {/* Protected routes */}
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />

        {/* data */}
        <Route path='/data/genre' element={<GenrePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
