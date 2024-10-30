import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import { useParams } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './App.css'
import Button from '../Button/Button'
import {CarCard, TempoCard, PremiumCard, BusCard} from '../CarCard/CarCard'

import carfleet from "/images/carImages/fleet2.png"
import tempofleet from "/images/carImages/carfleet3.png"
import bus1 from "/images/carImages/bus2.png"
import TourArray from '../TourArray/TourArray';
import Footer from '../Footer/Footer';

import Chatbot from 'react-chatbot-kit'
import ActionProvider from '../ChatBot/ActionProvider';
import MessageParser from '../ChatBot/MessageParser.js';
import config from '../ChatBot/config.jsx';
// import 'react-chatbot-kit/build/main.css';

function App() {
  useEffect(() =>{

  })
  const {name} = useParams();
  const [count, setCount] = useState(0)
  const [botVisibility, setBotVisibility] = useState("hidden")
  const updateBotVisibility = () =>{
    const bot = document.querySelector(".bot")
    if(botVisibility == "hidden"){   
        bot.classList.remove("hidden")
        bot.classList.add("visible")
        setBotVisibility("visible")
    }else if(botVisibility == "visible"){
      bot.classList.remove("visible")
      bot.classList.add("hidden")
      setBotVisibility("hidden")
    }
    console.log("hi")
  }
  return (
    <>
    <div className='font-sans body relative'>
    <div className="botIconContainer" onClick={updateBotVisibility}><div className="botIcon"><img src="/images/logos/chatbot-icon.png" alt="" /></div></div>
    <div className='bot hidden' >
      <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
    </div>
     <Header />
     
     <section className='page1 flex relative overflowX' id='front-section'>
        <div className='pi1 bgi1 fullWidth flex alignC h100 gap2 justify-between'>
          <div className='flexC gap2'>
            <div className='rental text-sm font-medium1 noWrap'>CAR RENTAL</div>
            <h1 className='text-large'>Rent Cars in Varanasi</h1>
            <div className="flexC gap1">
              <h3 className='text-medium1 maxW45ch'>From DZIRE  to MERCEDES, We got everything you may need in our extensive Fleet of cars</h3>
              <p className='text-sm1 maxW45ch'>With more than 100000+ Happy customers, We provide the  <strong> Best Car rental service in Varanasi</strong></p>
            </div>
            <HashLink className="textDecNone"  smooth to="/#rentalPage"><Button text="Rent Now >" classArray='text-sm1 button2 font-light'/></HashLink>
          </div>
          <div className='p1Mi'><img src={carfleet} alt="cars fleet of varanasi rentals" /></div>
        </div>
        <div className='pi1  bgi1 fullWidth flex alignC h100 gap2 justify-between'>
          <div className='flexC gap2'>
            <div className='rental text-sm font-medium1 noWrap'>TEMPO RENTAL</div>
            <h1 className='text-large'>Rent Tempo's in Varanasi</h1>
            <div className="flexC gap1">
              <h3 className='text-medium1 maxW45ch'>Need something bigger, We got everything you may need in our extensive Fleet of Tempos</h3>
              <p className='text-sm1 maxW45ch'>With more than 100000+ Happy customers, We provide the  <strong> Best Tempo rental service in Varanasi</strong></p>
            </div>
            <Link className="textDecNone"><Button text="Rent Now >" classArray='text-sm1 button2 font-light'/></Link>
          </div>
          <div className='p1Mi'><img src={tempofleet} alt="tempo and bus fleet of varanasi rentals" /></div>
        </div>
        <div className='pi1 bgi1 fullWidth flex alignC h100 gap2 justify-between'>
          <div className='flexC gap2'>
            <div className='rental text-sm font-medium1 noWrap'>BUS RENTAL</div>
            <h1 className='text-large'>Rent Buses in Varanasi</h1>
            <div className="flexC gap1">
              <h3 className='text-medium1 maxW45ch'>Have a big group, We got everything you may need in our extensive Fleet of Buses</h3>
              <p className='text-sm1 maxW45ch'>With more than 100000+ Happy customers, We provide the  <strong> Best Bus rental service in Varanasi</strong></p>
            </div>
            <Link className="textDecNone"><Button text="Rent Now >" classArray='text-sm1 button2 font-light'/></Link>
          </div>
          <div className='p1Mi'><img src={bus1} alt=" bus of varanasi rentals" /></div>
        </div>
     </section>
     
    </div>
    {/* <nav>
      <div><img src={cars} alt="image of cars at varansi rentals" /></div>
      <div><img src={tempos} alt="image of tempos at varanasi rentals" /></div>
      <div><img src={buses} alt="image of buses at varanasi rentals" /></div>
      <div><img src={premium} alt="image of premium cars at varansi rentals" /></div>
    </nav> */}
    <main className='fleetPage font-sans pb4' id="rentalPage">
      <div className='flexC gap2 alignC'>
        <div className="flexC gap1 alignC">
          <div className='rental text-sm font-medium1 noWrap'>RENTAL COLLECTION</div>
          <h1 className='text-medium'>Our Fleet Collection</h1>
        </div>
        <div className='buttonArray flex gap0'>
          <Link className='textDecNone pointer' to="/cars"><button className='font-medium text-sm1'>CARS</button></Link>
          <Link className='textDecNone pointer' to="/tempos"><button className='font-medium text-sm1'>TEMPOS</button></Link>
          <Link className='textDecNone pointer' to="/buses"><button className='font-medium text-sm1'>BUSES</button></Link>
          <Link className='textDecNone pointer' to="/premium"><button className='font-medium text-sm1'>PREMIUM</button></Link>
        </div>
        {name === "cars"?(
          <div className='cardArray gap2 pi1' >
            
            <CarCard name="Innova Crysta" airportRate="1500" rate1="3000" rate2="4000" rate3="18" capacity="6 + 1" driverRate="300" rentName="Crysta" carImage="/images/carImages/crysta1.webp" routeLink='/rentalPage/Crysta' />
            <CarCard name='Fortuner' airportRate="5000" rate1="8000" rate2="10500" rate3="45" capacity="6 + 1" driverRate="400" rentName="Fortuner" carImage="/images/carImages/fortuner1.jpg" routeLink='/rentalPage/Fortuner' />
            <CarCard name='Hycross' airportRate="2200" rate1="4500" rate2="6000" rate3="22" capacity="6 + 1" driverRate="400" rentName="Hycross" carImage="/images/carImages/hycross4.webp" routeLink='/rentalPage/Hycross' />
            <CarCard name='Ertiga' airportRate="1150" rate1="2500" rate2="3000" rate3="14" capacity="6 + 1" driverRate="300" rentName="Ertiga" carImage="/images/carImages/ertiga1.webp" routeLink='/rentalPage/Ertiga' />
            <CarCard name='Kia Carens' airportRate="1150" rate1="2500" rate2="3000" rate3="14" capacity="6 + 1" driverRate="300" rentName="Kia" carImage="/images/carImages/kia1.webp" routeLink='/rentalPage/Kia' />
            <CarCard name='Dzire' airportRate="900" rate1="2000" rate2="2500" rate3="11" capacity="4 + 1" driverRate="300" rentName="Dzire" carImage="/images/carImages/swift2.jpg" routeLink='/rentalPage/Swift' />
            
          </div>
        ): name === "tempos" ?(
          <div className='cardArray gap2 pi1' id='tempos'>
            <TempoCard name='Tempo Traveller' airportRate="2500" rate1="5500"  rate3="25" capacity="10 - 16" driverRate="500" image="/images/carImages/17seater.jpg" routeLink='/rentalPage/10-16SeaterTempo'/>
            <TempoCard name='Tempo Traveller' airportRate="3000" rate1="6500" rate3="28" capacity="17 - 20" driverRate="500" image="/images/carImages/tempo1.png" routeLink='/rentalPage/17-20SeaterTempo'/>
            <TempoCard name='Tempo Traveller' airportRate="1150" rate1="7500"  rate3="35" capacity="21 - 25" driverRate="500" image="/images/carImages/tempo4.png" routeLink='/rentalPage/21-25SeaterTempo'/>
            <TempoCard name='Tempo Traveller Maharaja' airportRate="3500" rate1="7500"  rate3="28" capacity="9 - 14" driverRate="500" image="/images/carImages/tempo3.png" routeLink='/rentalPage/TempoMaharaja'/>
            <TempoCard name='Urbania' airportRate="3000" rate1="6500"  rate3="30" capacity="9 - 16" driverRate="500" image="/images/carImages/urbania.jpg" routeLink='/rentalPage/Urbania'/>
            
            
          </div>
        ): name === "buses" ?(
            <div className='cardArray gap2 pi1'>
              <BusCard name='Mini Bus' rate1="9500" rate3="50" driverRate="1500" capacity="30-35" image="/images/carImages/bus4.jpg" routeLink='/rentalPage/MiniBus'/>
              <BusCard name=' Bus (40 Seater)' rate1="11000" rate3="55" driverRate="1500" capacity="40" image="/images/carImages/bus3.png" routeLink='/rentalPage/40SeaterBus'/>
              <BusCard name=' Bus (45 Seater)' rate1="12500" rate3="60" driverRate="1500" capacity="45" image="/images/carImages/bus5.jpg" routeLink='/rentalPage/45SeaterBus'/>
              <BusCard name=' Bus (49 Seater)' rate1="14500" rate3="65" driverRate="1500" capacity="49" image="/images/carImages/bus6.jpg" routeLink='/rentalPage/49SeaterBus'/>
            </div>
        ): name === "premium" ?(
            <div className='cardArray gap2 pi1'>
              <PremiumCard name="Mercedes Gls" image="/images/carImages/gls2.jpg" whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20making%20reservations%20for%20Mercedes%20Gls"/>
              <PremiumCard name="Mercedes S Class" image="/images/carImages/sclass2.jpg" whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20making%20reservations%20for%20Mercedes%20S%20Class"/>
              <PremiumCard name="Mercedes E Class" image="/images/carImages/eclass1.webp"whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20making%20reservations%20for%20Mercedes%20E%20Class" />
              <PremiumCard name="Bmw X7" image="/images/carImages/x7_1.webp" whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20making%20reservations%20for%20Bmw%20X7"/>
              <PremiumCard name="Bmw 5 Series" image="/images/carImages/series5_1.jpg" whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20making%20reservations%20for%20Bmw%205%20Series"/>
              <PremiumCard name="Bmw 3 Series" image="/images/carImages/3series_1.jpg" whatsappLink="https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20making%20reservations%20for%20Bmw%203%20Series"/>
              
            </div>
        ): (
          <div className='cardArray gap2 pi1'>
            <CarCard name="Innova Crysta" airportRate="1500" rate1="3000" rate2="4000" rate3="18" capacity="6 + 1" driverRate="300" rentName="Crysta" carImage="/images/carImages/crysta1.webp" routeLink='/rentalPage/Crysta' />
            <CarCard name='Fortuner' airportRate="5000" rate1="8000" rate2="10500" rate3="45" capacity="6 + 1" driverRate="400" rentName="Fortuner" carImage="/images/carImages/fortuner1.jpg" routeLink='/rentalPage/Fortuner' />
            <CarCard name='Hycross' airportRate="2200" rate1="4500" rate2="6000" rate3="22" capacity="6 + 1" driverRate="400" rentName="Hycross" carImage="/images/carImages/hycross4.webp" routeLink='/rentalPage/Hycross' />
            <CarCard name='Ertiga' airportRate="1150" rate1="2500" rate2="3000" rate3="14" capacity="6 + 1" driverRate="300" rentName="Ertiga" carImage="/images/carImages/ertiga1.webp" routeLink='/rentalPage/Ertiga' />
            <CarCard name='Kia Carens' airportRate="1150" rate1="2500" rate2="3000" rate3="14" capacity="6 + 1" driverRate="300" rentName="Kia" carImage="/images/carImages/kia1.webp" routeLink='/rentalPage/Kia' />
            <CarCard name='Dzire' airportRate="900" rate1="2000" rate2="2500" rate3="11" capacity="4 + 1" driverRate="300" rentName="Dzire" carImage="/images/carImages/swift2.jpg" routeLink='/rentalPage/Swift' />

            
          </div>
        )}
        


      </div>
      
    </main>
    <section className="tourPlan font-sans pb2">
      <div className='flexC gap1_5 alignC' id='travelPackages'>
          <div className='rental text-sm font-medium1 noWrap'>TOUR PLANS</div>
          <h1 className='text-medium' >Varanasi Tour Packages</h1>
          <TourArray />
      </div>
    </section>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default App
