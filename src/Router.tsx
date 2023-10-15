import { Navigate, useRoutes } from 'react-router-dom';
import Home from './pages/Home';

const Router = () =>
  useRoutes([
    { path: '', element: <Navigate to="home" /> },
    { path: 'home', element: <Home /> },
  ]);

export default Router;
