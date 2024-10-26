import App from "./App/App";
// import Profile from "./Profile";
import ErrorPage from "./ErrorPage/ErrorPage";
import RentalDetailPage from "./rentalDetailPage/RentalDetailPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:name",
    element: <App />,
  },
  {
    path: "/crystaRentalPage",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"/>,
  },
];

export default routes;