import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../views/home'

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path='*' element={<Navigate to='/home' replace />} />
    </Routes>
  )
}

export { PublicRoutes };
