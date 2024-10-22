import App from "./App/App";
// import Profile from "./Profile";
import ErrorPage from "./ErrorPage/ErrorPage";

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
];

export default routes;