import App from "./App/App";
// import Profile from "./Profile";
import ErrorPage from "./ErrorPage/ErrorPage";
import RentalDetailPage from "./rentalDetailPage/RentalDetailPage";
import TravelDetailPage from "./travelDetailPage/TravelDetailPage";

const optionArray2 = [{text:"Standard - 8hr 80Km",value:"package1"},{text:"Airport Pick/Drop", value:"airport"}]
const optionArray3 = [{text:"Standard - 1Day 300Km",value:"package1"}]
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
    element: <RentalDetailPage name1="Innova Crysta" name2="Innova Crysta"  capacity="6 + 1"  rental1="3000" rental2="4000" rental3="1500" extra1="18" extra2="250" driver="300" carImages="/images/carImages/crysta1.webp" whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Innova%20Crysta"/>,
  },
  {
    path: "/rentalPage/Fortuner",
    element: <RentalDetailPage name1="Fortuner" name2="Fortuner"  capacity="6 + 1"  rental1="8000" rental2="10500" rental3="5000" extra1="45" extra2="500" driver="500" carImages="/images/carImages/fortuner1.jpg" whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Fortuner"/>,
  },
  {
    path: "/rentalPage/Hycross",
    element: <RentalDetailPage name1="Hycross" name2="Hycross"  capacity="6 + 1"  rental1="4500" rental2="6000" rental3="2200" extra1="22" extra2="250" driver="400" carImages="/images/carImages/hycross4.webp" whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Hycross"/>,
  },
  {
    path: "/rentalPage/Ertiga",
    element: <RentalDetailPage name1="Ertiga" name2="Ertiga"  capacity="6 + 1"  rental1="2500" rental2="3000" rental3="1150" extra1="14" extra2="150" driver="300" carImages="/images/carImages/ertiga1.webp" whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Ertiga"/>,
  },
  {
    path: "/rentalPage/Kia",
    element: <RentalDetailPage name1=" Kia Carens " name2=" Kia Carens "  capacity="6 + 1"  rental1="2500" rental2="3000" rental3="1150" extra1="14" extra2="150" driver="300" carImages="/images/carImages/kia1.webp" whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Kia%20Carens"/>,
  },
  {
    path: "/rentalPage/Swift",
    element: <RentalDetailPage name1="Swift Dzire" name2="Swift Dzire"  capacity="4 + 1"  rental1="2000" rental2="2500" rental3="900" extra1="11" extra2="100" driver="300" carImages="/images/carImages/swift2.jpg" whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Dzire"/>,
  },
  {
    path: "/rentalPage/hondaCity",
    element: <RentalDetailPage name1="Honda City" name2="Honda City"  capacity="4 + 1"  rental1="3000" rental2="4000" rental3="1800" extra1="18" extra2="200" driver="400" carImages="/images/carImages/honda2.jpg" whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Honda%20City"/>,
  },
  {
    path: "/rentalPage/vernaFacelift",
    element: <RentalDetailPage name1="Verna Facelift" name2="Verna"  capacity="4 + 1"  rental1="3000" rental2="4000" rental3="1800" extra1="18" extra2="200" driver="400" carImages="/images/carImages/verna3.jpg" whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Verna%20Facelift"/>,
  },


  //tempo routes

  

  {
    path: "/rentalPage/10-16SeaterTempo",
    element: <RentalDetailPage name1="Tempo Traveller" name2="10 - 16 Seater"  capacity="10 - 16"  rental1="5500" rental3="2500" extra1="25" driver="500" carImages="/images/carImages/tempo3.png" optionArray={optionArray2} version="2" whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%2010%20seater%20Tempo%20traveller"/>,
  },
  {
    path: "/rentalPage/17-20SeaterTempo",
    element: <RentalDetailPage name1="Tempo Traveller" name2="17 - 20 Seater"  capacity="17 - 20"  rental1="6500" rental3="3000" extra1="28"  driver="500" carImages="/images/carImages/tempo4.png" optionArray={optionArray2} version="2" whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%2017%20seater%20Tempo%20traveller"/>,
  },
  {
    path: "/rentalPage/21-25SeaterTempo",
    element: <RentalDetailPage name1="Tempo Traveller" name2="21 - 25 Seater"  capacity="21 - 25"  rental1="7500" rental3="3500" extra1="35"  driver="500" carImages="/images/carImages/tempo2.png" optionArray={optionArray2} version="2" whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%2021%20seater%20Tempo%20traveller"/>,
  },
  {
    path: "/rentalPage/TempoMaharaja",
    element: <RentalDetailPage name1="Tempo Maharaja" name2="9 - 14 Seater"  capacity="9 - 14"  rental1="7500" rental3="3500" extra1="28"  driver="500" carImages="/images/carImages/tempo8.jpg" optionArray={optionArray2} version="2" whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20maharaja"/>,
  },
  {
    path: "/rentalPage/Urbania",
    element: <RentalDetailPage name1="Urbania" name2="9 - 16 Seater"  capacity="9 - 16"  rental1="7500" rental3="3500" extra1="30"  driver="500" carImages="/images/carImages/urbania.jpg" optionArray={optionArray2} version="2" whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20urbania"/>,
  },
  

  //buses routes
  {
    path: "/rentalPage/MiniBus",
    element: <RentalDetailPage name1="Mini Bus" name2="30-35 Seater"  capacity="30 - 35"  rental1="9500" extra1="50" version="2" driver="1500" carImages="/images/carImages/bus4.jpg" optionArray={optionArray3} whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%2030-35%20seater%20Mini%20bus"/>,
  },
  {
    path: "/rentalPage/40SeaterBus",
    element: <RentalDetailPage name1="Bus" name2="40 Seater"  capacity="40"  rental1="11000" extra1="55" version="2" driver="1500" carImages="/images/carImages/bus3.png" optionArray={optionArray3} whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20%40%20seater%20Bus"/>,
  },
  {
    path: "/rentalPage/45SeaterBus",
    element: <RentalDetailPage name1="Bus" name2="45 Seater"  capacity="45"  rental1="12500" extra1="60" version="2" driver="1500" carImages="/images/carImages/bus5.jpg" optionArray={optionArray3} whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20%45%20seater%20Bus"/>,
  },
  {
    path: "/rentalPage/49SeaterBus",
    element: <RentalDetailPage name1=" Bus" name2="49 Seater"  capacity="49"  rental1="14500" extra1="65" version="2" driver="1500" carImages="/images/carImages/bus6.jpg" optionArray={optionArray3} whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%2049%20seater%20Bus"/>,
  },


  
  

  //tour routes
  {
    path:"/tours/varanasi-allahabad",
    element: <TravelDetailPage name1="Varanasi -> Allahabad " name2="Varanasi to Allahabad" desc="Morning after breakfast leave for Allahabad (125Km/03Hrs). After reaching Prayagraj,                      Go to Triveni Sangam (Confluence of 3 holy rivers Ganga, Yamuna and Saraswati) for taking dip and to do Tarpan or ancestral pooja (Veni Daan).                       Later visit Sleeping Hanuman Temple (Lying Statue Of Lord Hanuman), Akshay Vat, Alopi Devi Temple and Anand Bhavan (Closed on Monday) " travelImages="/images/tour/triveniSangam.jpg" rental1="8,500 " rental2="10,000" extra1="25" distance="250" place1=" Triveni Sangam" place2=" Sleeping Hanuman Temple " place4="Akshay Vat" place5=" Alopi Devi Temple " place3="Anand Bhavan" whatsappLink="https://wa.me/919250028001?text=I'm%20interested%20in%20Varanasi%20to%20Allahabad%20tour" rental3="9,500" extra3="28" rental4="9,000" extra4="28" rental5="12,000" extra5="30" rental6="5,500" extra6="18" rental7="6,500" extra7="22" rental8="4,500" extra8="14" rental9="4,500" extra9="14" rental10="12,000" extra10="45" rental11="3,500" extra11="11" rental12="6,500" rental13="6,500" extra12="18" extra13="18"/>
  },
  {
    path:"/tours/varanasi-Sitamarhi",
    element: <TravelDetailPage name1="Varanasi -> Allahabad -> Sitamarhi -> Vindhyachal " name2="Varanasi to Sitamarhi " desc="Morning after breakfast move to Prayagraj.                      After reaching Prayagraj, Visit Triveni Sangam, Sleeping Hanuman Temple, Akshay Vat, Alopi Devi Temple and Anand Bhavan (Closed on Monday). Leave for Sita Samahit Sthal (Sitamarhi Temple) then visit Vindhyachal Temple (Shaktipeeth Temple) and back to Varanasi " travelImages="/images/tour/Akshayvat.webp" rental1="9,500 " rental2="12,500" extra1="25" distance="300" place1=" Triveni Sangam" place2=" Sleeping Hanuman Temple " place4="Sita Samahit Sthal " place5=" Alopi Devi Temple " place3="Vindhyachal Temple" whatsappLink="https://wa.me/919250028001?text=I'm%20interested%20in%20Varanasi%20to%20Sitamarhi%20tour" rental3="12,000" extra3="28" rental4="10,500" extra4="28" rental5="13,000" extra5="30" rental6="6,500" extra6="18" rental7="8,000" extra7="22" rental8="5,500" extra8="14" rental9="5,500" extra9="14" rental10="15,000" extra10="45" rental11="4,500" extra11="11" rental12="8,000" rental13="8,000" extra12="18" extra13="18"/>
  },
  {
    path:"/tours/varanasi-Chunar",
    element: <TravelDetailPage name1="Varanasi -> Vindhyachal -> Chunar" name2="Varanasi to Chunar" desc="Morning after breakfast move to Vindhyachal Temple and worship goddess Durga. Later after lunch go to Chunar Fort and buy the famous Pottery of Chunar for your memory and back to Varanasi " travelImages="/images/tour/chunarFort.jpg" rental1="7,500 " rental2="9,500" extra1="25" distance="200" place1=" Vindhyachal Temple" place2=" Chunar Fort " whatsappLink="https://wa.me/919250028001?text=I'm%20interested%20in%20Varanasi%20to%20Chunar%20tour" rental3="9,000" extra3="28" rental4="8,000" extra4="28" rental5="10,000" extra5="30" rental6="5,000" extra6="18" rental7="6,000" extra7="22" rental8="4,000" extra8="14" rental9="4,000" extra9="14" rental10="11,000" extra10="45" rental11="3,000" extra11="11" rental12="6,000" rental13="6,000" extra12="18" extra13="18"/>
  },
  {
    path:"/tours/varanasi-Ayodhya",
    element: <TravelDetailPage name1="Varanasi -> Ayodhya" name2="Varanasi to Ayodhya" desc="Early morning by 5am move to Ayodhya (220km/4hrs) breakfast on the way. After reaching Ayodhya go to Saryu River and take dip in holy river later visit Temples - Hanuman Garhi Temple,                  Ram Lala Temple (Shri Ram Janmabhoomi Teerth Kshetra), Sita Rasoi, Dasrath Mahal, Kanak Bhavan and back to Varanasi. " travelImages="/images/tour/ramJanamBhoomi.jpg" rental1="13,500 " rental2="18,500" extra1="25" distance="450" place1=" Saryu River" place2="Hanuman Garhi Temple " place3="Ram Lala Temple" place4=" Sita Rasoi" place5=" Dasrath Mahal" whatsappLink="https://wa.me/919250028001?text=I'm%20interested%20in%20Varanasi%20to%20Ayodhya%20tour" rental3="15,500" extra3="28" rental4="15,000" extra4="28" rental5="18,000" extra5="30" rental6="9,500" extra6="18" rental7="10,500" extra7="22" rental8="7,500" extra8="14" rental9="7,500" extra9="14" rental10="20,000" extra10="45" rental11="6,000" extra11="11" rental12="10,500" rental13="10,500" extra12="18" extra13="18"/>
  },

  {
    path:"/tours/varanasi-Prayagraj-Ayodhya1",
    element: <TravelDetailPage name1="Varanasi -> Prayagraj -> Ayodhya" name2="Varanasi to Ayodhya" desc="Early morning by 4am drive to Prayagraj              (Take dip in Triveni Sangam and visit Temples nearby) After lunch drive to Ayodhya (200km/4hrs) Overnight Stay.                                                                        Sightseeing in Shri Ram Janmabhoomi Teerth Kshetra. In Ayodhya go to Saryu River and take dip in holy river later visit Temples - Shri Ram Lala Temple, Hanuman Garhi Temple, Sita Rasoi, Dasrath Mahal, Kanak Bhavan and back to Varanasi.  " travelImages="/images/tour/saryuRiver.jpg" rental1="15,000 " rental2="21,000" extra1="25" distance="550" place1="Triveni Sangam" place2=" Saryu River" place3="Ram Lala Temple" place4=" Sita Rasoi" place5=" Dasrath Mahal" whatsappLink="https://wa.me/919250028001?text=I'm%20interested%20in%20Varanasi%20to%20Prayagraj%20and%20Ayodhya%20tour" rental3="20,000" extra3="28" rental4="17,500" extra4="28" rental5="20,000" extra5="30" rental6="11,500" extra6="18" rental7="12,500" extra7="22" rental8="9,000" extra8="14" rental9="9,000" extra9="14" rental10="25,000" extra10="45" rental11="7,500" extra11="11" rental12="12,500" rental13="12,500" extra12="18" extra13="18"/>
  },

  {
    path:"/tours/varanasi-Prayagraj-Ayodhya",
    element: <TravelDetailPage name1="Varanasi -> Prayagraj -> Ayodhya" name2="Varanasi to Ayodhya" desc="Day 1: Early morning by 4am drive to Prayagraj              (Take dip in Triveni Sangam and visit Temples nearby) After lunch drive to Ayodhya (200km/4hrs) Overnight Stay.                                                                        Day 2: Sightseeing in Shri Ram Janmabhoomi Teerth Kshetra. In Ayodhya go to Saryu River and take dip in holy river later visit Temples - Shri Ram Lala Temple, Hanuman Garhi Temple, Sita Rasoi, Dasrath Mahal, Kanak Bhavan and back to Varanasi.  " travelImages="/images/tour/ayodhya3.jpg" rental1="17,500 " rental2="24,000" extra1="25" distance="550" place1="Triveni Sangam" place2=" Saryu River" place3="Ram Lala Temple" place4=" Sita Rasoi" place5=" Dasrath Mahal" whatsappLink="https://wa.me/919250028001?text=I'm%20interested%20in%20Varanasi%20to%20Prayagraj%20and%20Ayodhya%20tour" rental3="23,000" extra3="28" rental4="20,000" extra4="28" rental5="24,000" extra5="30" rental6="13,000" extra6="18" rental7="15,000" extra7="22" rental8="10,500" extra8="14" rental9="10,500" extra9="14" rental10="27,000" extra10="45" rental11="9,000" extra11="11" rental12="15,000" rental13="15,000" extra12="18" extra13="18"/>
  },
  {
    path:"/tours/varanasi-Gaya-Bodhgaya",
    element: <TravelDetailPage name1="Varanasi -> Gaya -> Bodhgaya" name2="Varanasi to Bodhgaya" desc="Early morning by 4am leave for Gaya from Varanasi. Do pind daan at Vishnupad Temple, Gaya and later visit Mangala Gauri Temple. Go to Bodhgaya after lunch and visit Mahabodhi Temple, 80 Feet Buddha Statue and other Buddhist Monastery.                                      By evening return back to Varanasi " travelImages="/images/tour/80feet.jpg" rental1="15,000 " rental2="20,000" extra1="25" distance="550" place1=" Vishnupad Temple" place2=" Mangala Gauri Temple" place3=" Mahabodhi Temple" place4="80 Feet Buddha Statue" place5="Monastery" whatsappLink="https://wa.me/919250028001?text=I'm%20interested%20in%20Varanasi%20to%20Gaya%20and%20Bodhgaya%20tour" rental3="19,000" extra3="28" rental4="16,500" extra4="28" rental5="20,000" extra5="30" rental6="10,000" extra6="18" rental7="12,000" extra7="22" rental8="8,500" extra8="14" rental9="8,500" extra9="14" rental10="22,500" extra10="45" rental11="7,000" extra11="11" rental12="12,000" rental13="12,000" extra12="18" extra13="18"/>
  },
  {
    path:"/tours/varanasi-Gaya-Bodhgaya1",
    element: <TravelDetailPage name1="Varanasi -> Gaya -> Bodhgaya" name2="Varanasi to Bodhgaya" desc="Early morning by 4am leave for Gaya from Varanasi. Do pind daan at Vishnupad Temple, Gaya and later visit Mangala Gauri Temple. Go to Bodhgaya after lunch and visit Mahabodhi Temple, 80 Feet Buddha Statue and other Buddhist Monastery.                                      then return back to Varanasi " travelImages="/images/tour/bodhgaya2.jpg" rental1="17,500 " rental2="24,000" extra1="25" distance="550" place1=" Vishnupad Temple" place2=" Mangala Gauri Temple" place3=" Mahabodhi Temple" place4="80 Feet Buddha Statue" place5="Monastery" whatsappLink="https://wa.me/919250028001?text=I'm%20interested%20in%20Varanasi%20to%20Gaya%20and%20Bodhgaya%20tour" rental3="23,000" extra3="28" rental4="20,000" extra4="28" rental5="25,000" extra5="30" rental6="12,000" extra6="18" rental7="15,000" extra7="22" rental8="10,000" extra8="14" rental9="10,000" extra9="14" rental10="25,000" extra10="45" rental11="8,500" extra11="11" rental12="15,000" rental13="15,000" extra12="18" extra13="18"/>
  },

  {
    path:"/tours/varanasi-Prayagraj-Ayodhya-Nainisharan",
    element: <TravelDetailPage name1="varanasi-> Prayagraj -> Ayodhya -> Nainisharan" name2="Varanasi to Nainisharan" desc="An Exciting 3 day trip from Varanasi to Prayagraj to Ayodhya to Nainisharan where you will visit  Triveni Sangam and visit Temples nearby on day1 then  Saryu River,  Shri Ram Lala Temple, Hanuman Garhi Temple, Sita Rasoi, Dasrath Mahal, Kanak Bhavan then to nainisharan and back to Varanasi. " travelImages="/images/tour/nainisharan1.jpg" rental1="27,500 " rental2="39,000" extra1="25" distance="1000" place1="Triveni Sangam" place2=" Saryu River" place3="Ram Lala Temple" place4=" Sita Rasoi" place5=" Dasrath Mahal"  whatsappLink="https://wa.me/919250028001?text=I'm%20interested%20in%20Varanasi%20to%20Nainisharan%20tour" rental3="38,000" extra3="28" rental4="32,000" extra4="28" rental5="39,000" extra5="30" rental6="20,000" extra6="18" rental7="24,000" extra7="22" rental8="16,500" extra8="14" rental9="16,500" extra9="14" rental10="42,500" extra10="45" rental11="13,500" extra11="11" rental12="24,000" rental13="24,000" extra12="18" extra13="18"/>
  },

  {
    path:"/tours/varanasi-Prayagraj-Chitrakoot",
    element: <TravelDetailPage name1="Varanasi -> Prayagraj -> Chitrakoot" name2="Varanasi to Chitrakoot" desc="Embark on a 2 day trip from Varanasi to Prayagraj to Chitakoot where you will visit  Triveni Sangam and visit Temples nearby on day1 then  cover all the major places in Chitakoot and then head back to Varanasi. " travelImages="/images/tour/Chitrakoot2.jpg" rental1="20,000 " rental2="25,000" extra1="25" distance="550" place1="Triveni Sangam" place2=" Ramghat" place3=" Kamadgiri Temple" place4=" Hanuman Dhara" place5=" Valmiki Ashram"  whatsappLink="https://wa.me/919250028001?text=I'm%20interested%20in%20Varanasi%20to%20Chitrakoot%20tour" rental3="24,000" extra3="28" rental4="22,000" extra4="28" rental5="30,000" extra5="30" rental6="13,000" extra6="18" rental7="15,000" extra7="22" rental8="10,500" extra8="14" rental9="10,500" extra9="14" rental10="25,000" extra10="45" rental11="9,000" extra11="11" rental12="15,000" rental13="15,000" extra12="18" extra13="18"/>
  },

  {
    path:"/tours/varanasi-Prayagraj-Chitrakoot1",
    element: <TravelDetailPage name1="Varanasi -> Prayagraj -> Chitrakoot" name2="Varanasi to Chitrakoot" desc="A consize 1 day trip from Varanasi to Prayagraj to Chitakoot where you will visit  Triveni Sangam and visit Temples nearby on day1 then  cover all the major places in Chitakoot and then head back to Varanasi." travelImages="/images/tour/chitakoot1.webp" rental1="17,000 " rental2="21,000" extra1="25" distance="550" place1="Triveni Sangam" place2=" Ramghat" place3=" Kamadgiri Temple" place4=" Hanuman Dhara" place5=" Valmiki Ashram"  whatsappLink="https://wa.me/919250028001?text=I'm%20interested%20in%20Varanasi%20to%20Chitrakoot%20tour" rental3="20,000" extra3="28" rental4="18,000" extra4="28" rental5="25,000" extra5="30" rental6="11,000" extra6="18" rental7="12,500" extra7="22" rental8="9,000" extra8="14" rental9="9,000" extra9="14" rental10="23,000" extra10="45" rental11="7,500" extra11="11" rental12="12,500" rental13="12,500" extra12="18" extra13="18"/>
  },
  

];

export default routes;