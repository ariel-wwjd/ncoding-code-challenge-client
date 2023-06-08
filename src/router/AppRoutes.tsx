import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

const status = true;

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {status ? (
            <Route path='/*' element={<PrivateRoutes />} />
          ) : (
            <Route path='/*' element={<PublicRoutes />} />
          )}
          <Route path='*' element={<Navigate to='./' replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { AppRoutes };
