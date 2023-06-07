import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

type Status = 'checking' | 'authenticated' | 'no-authenticated'

const status: Status = 'authenticated'

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            status === 'authenticated'
            ? <Route path='/*' element={<PrivateRoutes />} />
            : <Route path='/*' element={<PublicRoutes />} />
          }
          <Route path='*' element={<Navigate to='./home' replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { AppRoutes };
