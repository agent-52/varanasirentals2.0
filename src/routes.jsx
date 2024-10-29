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
    element: <TravelDetailPage name1="Varanasi -> Allahabad " name2="Varansi to Vindhyachal" desc="Morning after breakfast leave for Allahabad (125Km/03Hrs). After reaching Prayagraj,                      Go to Triveni Sangam (Confluence of 3 holy rivers Ganga, Yamuna and Saraswati) for taking dip and to do Tarpan or ancestral pooja (Veni Daan).                       Later visit Sleeping Hanuman Temple (Lying Statue Of Lord Hanuman), Akshay Vat, Alopi Devi Temple and Anand Bhavan (Closed on Monday) " travelImages="" rental1="8,500 " rental2="10,000" extra1="25" distance="250" place1=" Triveni Sangam" place2=" Sleeping Hanuman Temple " place4="Akshay Vat" place5=" Alopi Devi Temple " place3="Anand Bhavan" whatsappLink="https://wa.me/919250028001?text=I'm%20interested%20in%20Varanasi%20to%20Allahabad%20tour"/>
  },
  {
    path:"/tours/varanasi-Sitamarhi ",
    element: <TravelDetailPage name1="Varanasi -> Allahabad -> Sitamarhi -> Vindhyachal " name2="Varansi to Sitamarhi " desc="Morning after breakfast move to Prayagraj.                      After reaching Prayagraj, Visit Triveni Sangam, Sleeping Hanuman Temple, Akshay Vat, Alopi Devi Temple and Anand Bhavan (Closed on Monday). Leave for Sita Samahit Sthal (Sitamarhi Temple) then visit Vindhyachal Temple (Shaktipeeth Temple) and back to Varanasi " travelImages="" rental1="9,500 " rental2="12,500" extra1="25" distance="300" place1=" Triveni Sangam" place2=" Sleeping Hanuman Temple " place4="Sita Samahit Sthal " place5=" Alopi Devi Temple " place3="Vindhyachal Temple" whatsappLink="https://wa.me/919250028001?text=I'm%20interested%20in%20Varanasi%20to%20Sitamarhi%20tour"/>
  },
  {
    path:"/tours/varanasi-Chunar",
    element: <TravelDetailPage name1="Varanasi -> Vindhyachal -> Chunar" name2="Varansi to Chunar" desc="Morning after breakfast move to Vindhyachal Temple and worship goddess Durga. Later after lunch go to Chunar Fort and buy the famous Pottery of Chunar for your memory and back to Varanasi " travelImages="" rental1="7,500 " rental2="9,500" extra1="25" distance="200" place1=" Vindhyachal Temple" place2=" Chunar Fort " whatsappLink="https://wa.me/919250028001?text=I'm%20interested%20in%20Varanasi%20to%20Chunar%20tour"/>
  },
  {
    path:"/tours/varanasi-Ayodhya",
    element: <TravelDetailPage name1="Varanasi -> Ayodhya" name2="Varansi to Ayodhya" desc="Early morning by 5am move to Ayodhya (220km/4hrs) breakfast on the way. After reaching Ayodhya go to Saryu River and take dip in holy river later visit Temples - Hanuman Garhi Temple,                  Ram Lala Temple (Shri Ram Janmabhoomi Teerth Kshetra), Sita Rasoi, Dasrath Mahal, Kanak Bhavan and back to Varanasi. " travelImages="" rental1="14,500 " rental2="18,500" extra1="25" distance="450" place1=" Saryu River" place2="Hanuman Garhi Temple " place3="Ram Lala Temple" place4=" Sita Rasoi" place5=" Dasrath Mahal" whatsappLink="https://wa.me/919250028001?text=I'm%20interested%20in%20Varanasi%20to%20Ayodhya%20tour"/>
  },
  {
    path:"/tours/varanasi-Prayagraj-Ayodhya",
    element: <TravelDetailPage name1="Varanasi -> Prayagraj -> Ayodhya" name2="Varansi to Ayodhya" desc="Day 1: Early morning by 4am drive to Prayagraj              (Take dip in Triveni Sangam and visit Temples nearby) After lunch drive to Ayodhya (200km/4hrs) Overnight Stay.                                                                        Day 2: Sightseeing in Shri Ram Janmabhoomi Teerth Kshetra. In Ayodhya go to Saryu River and take dip in holy river later visit Temples - Shri Ram Lala Temple, Hanuman Garhi Temple, Sita Rasoi, Dasrath Mahal, Kanak Bhavan and back to Varanasi.  " travelImages="" rental1="18,500 " rental2="22,500" extra1="25" distance="550" place1="Triveni Sangam" place2=" Saryu River" place3="Ram Lala Temple" place4=" Sita Rasoi" place5=" Dasrath Mahal" whatsappLink="https://wa.me/919250028001?text=I'm%20interested%20in%20Varanasi%20to%20Prayagraj%20and%20Ayodhya%20tour"/>
  },
  {
    path:"/tours/varanasi-Gaya-Bodhgaya",
    element: <TravelDetailPage name1="Varanasi -> Gaya -> Bodhgaya" name2="Varansi to Ayodhya" desc="Early morning by 4am leave for Gaya from Varanasi. Do pind daan at Vishnupad Temple, Gaya and later visit Mangala Gauri Temple. Go to Bodhgaya after lunch and visit Mahabodhi Temple, 80 Feet Buddha Statue and other Buddhist Monastery.                                      By evening return back to Varanasi " travelImages="" rental1="16,500 " rental2="22,500" extra1="25" distance="550" place1=" Vishnupad Temple" place2=" Mangala Gauri Temple" place3=" Mahabodhi Temple" place4="80 Feet Buddha Statue" place5="Monastery" whatsappLink="https://wa.me/919250028001?text=I'm%20interested%20in%20Varanasi%20to%20Gaya%20and%20Bodhgaya%20tour"/>
  },
  

];

export default routes;