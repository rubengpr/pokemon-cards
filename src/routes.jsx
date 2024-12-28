// routes.jsx
import { Navigate } from 'react-router-dom';
import App from './App.jsx'
import { LandingPage } from './assets/components/Landingpage/LandingPage.jsx';
import { ErrorPage } from './assets/components/ErrorPage/ErrorPage.jsx';

const routes = [
    {
      path: "/",
      element: <Navigate to="/home" replace />, // Redirects / to /home
    },
    {
      path: "/home",
      element: <LandingPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "cards",
          element: <App />, 
        },
        {
          path: "pokedex",
          element: <App />, 
        }
      ]
    }
];

export default routes;