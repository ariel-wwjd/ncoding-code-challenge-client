import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../views/home';
import { AvailableCourses } from '../views/availableCourses';
import { MyCourses } from '../views/myCourses';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='available-courses' element={<AvailableCourses />} />
      <Route path='my-courses' element={<MyCourses />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export { PrivateRoutes };
