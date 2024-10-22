import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import { useParams } from "react-router-dom";

import './App.css'
import Button from '../Button/Button'
import {CarCard, TempoCard} from '../CarCard/CarCard'

import carfleet from "/images/carImages/carfleet1.png"
import tempofleet from "/images/carImages/carfleet3.png"
import bus1 from "/images/carImages/bus2.png"

function App() {
  const {name} = useParams();
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='font-sans body'>
     <Header />
     <section className='page1 flex relative overflowX'>
        <div className='pi1 bgi1 fullWidth flex alignC h100 gap2 justify-between'>
          <div className='flexC gap2'>
            <div className='rental text-sm font-medium1 noWrap'>CAR RENTAL</div>
            <h1 className='text-large'>Rent Cars in Varanasi</h1>
            <div className="flexC gap1">
              <h3 className='text-medium1 maxW45ch'>From DZIRE  to MERCEDES, We got everything you may need in our extensive Fleet of cars</h3>
              <p className='text-sm1 maxW45ch'>With more than 100000+ Happy customers, We provide the  <strong> Best Car rental service in Varanasi</strong></p>
            </div>
            <Link className="textDecNone"><Button text="Rent Now >" classArray='text-sm1 button2 font-light'/></Link>
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
    <main className='fleetPage font-sans'>
      <div className='flexC gap1 alignC'>
        <div className='rental text-sm font-medium1 noWrap'>RENTAL COLLECTION</div>
        <h1 className='text-medium'>Our Fleet Collection</h1>
        <div className='buttonArray flex gap0'>
          <Link className='textDecNone pointer' to="/cars"><button className='font-medium text-sm1'>CARS</button></Link>
          <Link className='textDecNone pointer' to="/tempos"><button className='font-medium text-sm1'>TEMPOS</button></Link>
          <Link className='textDecNone pointer' to="/buses"><button className='font-medium text-sm1'>BUSES</button></Link>
          <Link className='textDecNone pointer' to="/premium"><button className='font-medium text-sm1'>PREMIUM</button></Link>
        </div>
        {name === "cars"?(
          <div className='cardArray gap2 pi1'>
            <CarCard name='Dzire' airportRate="900" rate1="2000" rate2="2500" rate3="11" capacity="4 + 1" driverRate="300" rentName="Dzire" carImage="/images/carImages/swift2.webp" />
            <CarCard name='Fortuner' airportRate="5000" rate1="8000" rate2="10500" rate3="45" capacity="6 + 1" driverRate="400" rentName="Fortuner" carImage="/images/carImages/fortuner1.webp" />
            <CarCard name='Ertiga' airportRate="1150" rate1="2500" rate2="3000" rate3="14" capacity="6 + 1" driverRate="300" rentName="Ertiga" carImage="/images/carImages/ertiga1.webp" />
            <CarCard name='Hycross' airportRate="2200" rate1="4500" rate2="6000" rate3="22" capacity="6 + 1" driverRate="400" rentName="Hycross" carImage="/images/carImages/hycross4.webp" />
            <CarCard name='Kia Carens' airportRate="1150" rate1="2500" rate2="3000" rate3="14" capacity="6 + 1" driverRate="300" rentName="Kia" carImage="/images/carImages/kia1.webp" />
            <CarCard name="Innova Crysta" airportRate="1500" rate1="3000" rate2="4000" rate3="18" capacity="6 + 1" driverRate="300" rentName="Crysta" carImage="/images/carImages/crysta1.webp" />
            
          </div>
        ): name === "tempos" ?(
          <div className='cardArray gap2 pi1'>
            <TempoCard name='Dzire' airportRate="900" rate1="2000"  rate3="11" capacity="4 + 1" driverRate="300" carImage="/images/carImages/swift2.webp" />
            <TempoCard name='Fortuner' airportRate="5000" rate1="8000" r rate3="45" capacity="6 + 1" driverRate="400" carImage="/images/carImages/fortuner1.webp" />
            <TempoCard name='Ertiga' airportRate="1150" rate1="2500"  rate3="14" capacity="6 + 1" driverRate="300" carImage="/images/carImages/ertiga1.webp" />
            <TempoCard name='Hycross' airportRate="2200" rate1="4500"  rate3="22" capacity="6 + 1" driverRate="400" carImage="/images/carImages/hycross4.webp" />
            <TempoCard name='Kia Carens' airportRate="1150" rate1="2500"  rate3="14" capacity="6 + 1" driverRate="300" carImage="/images/carImages/kia1.webp" />
            <TempoCard name="Innova Crysta" airportRate="1500" rate1="3000"  rate3="18" capacity="6 + 1" driverRate="300" carImage="/images/carImages/crysta1.webp" />
            
          </div>
        ): name === "buses" ?(
            <div className='cardArray gap2 pi1'>
              <CarCard name='Dzire' airportRate="900" rate1="2000" rate2="2500" rate3="11" capacity="4 + 1" driverRate="300" rentName="Dzire" carImage="/images/carImages/swift2.webp" />
              <CarCard name='Fortuner' airportRate="5000" rate1="8000" rate2="10500" rate3="45" capacity="6 + 1" driverRate="400" rentName="Fortuner" carImage="/images/carImages/fortuner1.webp" />
              <CarCard name='Ertiga' airportRate="1150" rate1="2500" rate2="3000" rate3="14" capacity="6 + 1" driverRate="300" rentName="Ertiga" carImage="/images/carImages/ertiga1.webp" />
              <CarCard name='Hycross' airportRate="2200" rate1="4500" rate2="6000" rate3="22" capacity="6 + 1" driverRate="400" rentName="Hycross" carImage="/images/carImages/hycross4.webp" />
              <CarCard name='Kia Carens' airportRate="1150" rate1="2500" rate2="3000" rate3="14" capacity="6 + 1" driverRate="300" rentName="Kia" carImage="/images/carImages/kia1.webp" />
              <CarCard name="Innova Crysta" airportRate="1500" rate1="3000" rate2="4000" rate3="18" capacity="6 + 1" driverRate="300" rentName="Crysta" carImage="/images/carImages/crysta1.webp" />
              
            </div>
        ): name === "premium" ?(
            <div className='cardArray gap2 pi1'>
              <CarCard name='Dzire' airportRate="900" rate1="2000" rate2="2500" rate3="11" capacity="4 + 1" driverRate="300" rentName="Dzire" carImage="/images/carImages/swift2.webp" />
              <CarCard name='Fortuner' airportRate="5000" rate1="8000" rate2="10500" rate3="45" capacity="6 + 1" driverRate="400" rentName="Fortuner" carImage="/images/carImages/fortuner1.webp" />
              <CarCard name='Ertiga' airportRate="1150" rate1="2500" rate2="3000" rate3="14" capacity="6 + 1" driverRate="300" rentName="Ertiga" carImage="/images/carImages/ertiga1.webp" />
              <CarCard name='Hycross' airportRate="2200" rate1="4500" rate2="6000" rate3="22" capacity="6 + 1" driverRate="400" rentName="Hycross" carImage="/images/carImages/hycross4.webp" />
              <CarCard name='Kia Carens' airportRate="1150" rate1="2500" rate2="3000" rate3="14" capacity="6 + 1" driverRate="300" rentName="Kia" carImage="/images/carImages/kia1.webp" />
              <CarCard name="Innova Crysta" airportRate="1500" rate1="3000" rate2="4000" rate3="18" capacity="6 + 1" driverRate="300" rentName="Crysta" carImage="/images/carImages/crysta1.webp" />
              
            </div>
        ): (
          <div className='cardArray gap2 pi1'>
            <CarCard name='Dzire' airportRate="900" rate1="2000" rate2="2500" rate3="11" capacity="4 + 1" driverRate="300" rentName="Dzire" carImage="/images/carImages/swift2.webp" />
            <CarCard name='Fortuner' airportRate="5000" rate1="8000" rate2="10500" rate3="45" capacity="6 + 1" driverRate="400" rentName="Fortuner" carImage="/images/carImages/fortuner1.webp" />
            <CarCard name='Ertiga' airportRate="1150" rate1="2500" rate2="3000" rate3="14" capacity="6 + 1" driverRate="300" rentName="Ertiga" carImage="/images/carImages/ertiga1.webp" />
            <CarCard name='Hycross' airportRate="2200" rate1="4500" rate2="6000" rate3="22" capacity="6 + 1" driverRate="400" rentName="Hycross" carImage="/images/carImages/hycross4.webp" />
            <CarCard name='Kia Carens' airportRate="1150" rate1="2500" rate2="3000" rate3="14" capacity="6 + 1" driverRate="300" rentName="Kia" carImage="/images/carImages/kia1.webp" />
            <CarCard name="Innova Crysta" airportRate="1500" rate1="3000" rate2="4000" rate3="18" capacity="6 + 1" driverRate="300" rentName="Crysta" carImage="/images/carImages/crysta1.webp" />
            
          </div>
        )}
        


      </div>
    </main>
    </>
  )
}

export default App
