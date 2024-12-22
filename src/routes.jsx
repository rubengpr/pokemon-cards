import App from './App.jsx'
import { LandingPage } from './assets/components/Landingpage/LandingPage.jsx';
import { ErrorPage } from './assets/components/ErrorPage/ErrorPage.jsx';


const routes = [
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "cards",
      element: <App />,
    },
  ];

  export default routes;