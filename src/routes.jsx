import App from './App.jsx'
import { LandingPage } from './assets/components/Landingpage/LandingPage.jsx';
import { ErrorPage } from './assets/components/ErrorPage/ErrorPage.jsx';
import { PokedexPage } from './assets/components/PokedexPage/PokedexPage.jsx';
import { CardsPage } from './assets/components/CardsPage/CardsPage.jsx';


const routes = [
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "cards",
      element: <CardsPage />,
    },
    {
      path: "pokedex",
      element: <PokedexPage />,
    },
    {
      path: "app",
      element: <App />,
    },
  ];

  export default routes;