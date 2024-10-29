import App from "./App/App";
// import Profile from "./Profile";
import ErrorPage from "./ErrorPage/ErrorPage";
import RentalDetailPage from "./rentalDetailPage/RentalDetailPage";
import TravelDetailPage from "./travelDetailPage/TravelDetailPage";

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

  //cars routes

  {
    path: "/rentalPage/Crysta",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Fortuner",
    element: <RentalDetailPage name1="Fortuner" name2="Fortuner"  capacity="6 + 1"  rental1="8000" rental2="10500" rental3="5000" extra1="45" extra2="500" driver="500" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Hycross",
    element: <RentalDetailPage name1="Hycross" name2="Hycross"  capacity="6 + 1"  rental1="4500" rental2="6000" rental3="2200" extra1="22" extra2="250" driver="400" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Ertiga",
    element: <RentalDetailPage name1="Ertiga" name2="Ertiga"  capacity="6 + 1"  rental1="2500" rental2="3000" rental3="1150" extra1="14" extra2="150" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Kia",
    element: <RentalDetailPage name1=" Kia Carens " name2=" Kia Carens "  capacity="6 + 1"  rental1="2500" rental2="3000" rental3="1150" extra1="14" extra2="150" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Swift",
    element: <RentalDetailPage name1="Swift Dzire" name2="Swift Dzire"  capacity="4 + 1"  rental1="2000" rental2="2500" rental3="900" extra1="11" extra2="100" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },


  //tempo routes

  {
    path: "/rentalPage/Crysta",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Crysta",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Crysta",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Crysta",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Crysta",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Crysta",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Crysta",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Crysta",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Crysta",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Crysta",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Crysta",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Crysta",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Crysta",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Crysta",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Crysta",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Crysta",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Crysta",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  {
    path: "/rentalPage/Crysta",
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crystaWall.jpg"/>,
  },
  

  //tour routes
  {
    path:"/tours/varanasi-allahabad",
    element: <TravelDetailPage />
  }
  

];

export default routes;