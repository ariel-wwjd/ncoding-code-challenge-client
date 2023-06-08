import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../views/home';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export { PublicRoutes };
