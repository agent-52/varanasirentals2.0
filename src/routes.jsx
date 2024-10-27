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
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta" image="/images/carImages/crystaWall.jpg" capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
];

export default routes;