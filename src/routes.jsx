// routes.jsx
import { Navigate } from 'react-router-dom';
import App from './App.jsx'
import { LandingPage } from './assets/components/Landingpage/LandingPage.jsx';
import { ErrorPage } from './assets/components/ErrorPage/ErrorPage.jsx';
import { ProfilePage } from './assets/components/ProfilePage/ProfilePage.jsx';
import { PreferencesPage } from './assets/components/PreferencesPage/PreferencesPage.jsx';

const routes = [
    {
      path: "/",
      element: <Navigate to="/home" replace />, // Redirects / to /home
      errorElement: <ErrorPage />
    },
    {
      path: "/home",
      element: <LandingPage />,
    },
    {
      path: "cards",
      element: <App />, 
    },
    {
      path: "pokedex",
      element: <App />, 
    },
    {
      path: "profile",
      element: <ProfilePage />, 
    },
    {
      path: "preferences",
      element: <PreferencesPage />, 
    }
  ];

export default routes;