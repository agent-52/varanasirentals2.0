import "./Header.css"
import { Link } from "react-router-dom"
import Button from "../Button/Button"
import { useEffect, useState } from "react"
import { HashLink } from 'react-router-hash-link';
import logo from "/images/logos/logo3.png"
import call from "/images/logos/call.png"
import backArrow from "/images/logos/back1.png"
const Header = () =>
{
  useEffect(() =>{

    const rentalCarsList = document.querySelector(".rentalCarsList")
    const carHeading = document.querySelector(".carHeading")
    carHeading.addEventListener("mouseenter", () =>{
      rentalCarsList.classList.add("visible")
      rentalCarsList.classList.remove("hidden")
    })
    carHeading.addEventListener("mouseleave", () =>{
      rentalCarsList.classList.add("hidden")
      rentalCarsList.classList.remove("visible")
    })
  })
  const [navVisibility, setNavVisibility] = useState(false)
  function updateNavVisibilty(){
    if(navVisibility == true){
      setNavVisibility(false)
      document.querySelector(".navBarMobile").classList.add("navHidden")
      console.log("hidden")
    }else{
      setNavVisibility(true)
      document.querySelector(".navBarMobile").classList.remove("navHidden")
      console.log("visible")
    }
  }

  return(
    <div className="pi1">
    <div className="header noWrap">
      <Link className="textDecNone" to="/">
        <div className="flex alignC gap00">
          <div className="imgBox1"><img src={logo} alt="varanasi rentals logo" /></div>
          
          <h1 className="text-medium2 noWrap" >Varanasi Taxi<span className="text-pink">Rentals</span></h1>
        </div>
        
      </Link>
      <div className="navDesktop text-black-a9 text-sm1 flex gap2 alignC">
        
        <HashLink smooth to="/#rentalPage" className="textDecNone"><div className="font-medium1 text-sm1 carHeading">Rental Cars
          <ul className="hidden rentalCarsList">
            <Link className="textDecNone" to="/rentalPage/Crysta"><li>Rent Crysta</li></Link>
            <Link className="textDecNone" to="/rentalPage/Fortuner"><li>Rent Fortuner</li></Link>
            <Link className="textDecNone" to="/rentalPage/Ertiga"><li>Rent Ertiga</li></Link>
            <Link className="textDecNone" to="/rentalPage/Hycross"><li>Rent Hycross</li></Link>
            <Link className="textDecNone" to="/rentalPage/Kia"><li>Rent Kia Carens</li></Link>
            <Link className="textDecNone" to="/rentalPage/Swift"><li>Rent Dzire</li></Link>
            <Link className="textDecNone" to="/rentalPage/HondaCity"><li>Rent Honda City</li></Link>
            <Link className="textDecNone" to="/rentalPage/vernaFacelift"><li>Rent Verna</li></Link>
          </ul>
           </div></HashLink>
        <HashLink smooth to="/#rentalPage" className="textDecNone"><div className="font-medium1 text-sm1">Bus/Tempo</div></HashLink>
        <HashLink smooth to="/#travelPackages" className="textDecNone"><div className="font-medium1 text-sm1">Tours & Packages</div></HashLink>
        <Link to="/about" className="textDecNone"><div className="font-medium1 text-sm1">About</div></Link>
        {/* <Link to="/contactDetails" className="textDecNone"><div className="font-medium1 text-sm1">Contact us</div></Link> */}
        
        <div className="flex alignC gap00">
          <div className="imgBox"><img src={call} alt="varanasi taxi rental logo" /></div>
          
          <div className="flexC">
            <h1 className="text-sm noWrap" >need help ? </h1>
            <a className="textDecNone" href="tel:9250028001" target="_blank"><div className="flexC">
              <div className="text-pink text-sm1">9250028001</div>
              {/* <div className="text-pink text-sm1">9335359900</div> */}
            </div>
            </a>
            
          </div>
        </div>
        
      
      </div>
      
    </div>

    <div className="header2">
      <Link className="textDecNone" to="/">
        <div className="flex gap00 alignC">
          <div className="imgBox1"><img src={logo} alt="varanasi rentals logo" /></div>
          <h1 className="text-medium1">Varanasi Taxi<span className="text-pink">Rentals</span></h1>
        </div>
      </Link>
      <div className="navMobile" onClick={updateNavVisibilty}>
        <div className="stick"></div>
        <div className="stick"></div>
        <div className="stick"></div>
      </div>
    </div>

    <div className="navBarMobile navHidden " >
      <div className="navMobile cross" onClick={updateNavVisibilty}>
        <div className="imgBox2"><img src={backArrow} alt="" /></div>
        
      </div>
      <Link to="/" className="textDecNone"><div className="text-medium2" onClick={updateNavVisibilty}>Home</div></Link>
      {/* <Link to="/about" className="textDecNone"><div className="text-medium">About</div></Link> */}
      {/* <HashLink to="/#CarsRental" className="textDecNone"><div className="text-medium2">Rental Cars </div></HashLink>
      <HashLink smooth to="/#TampoRental" className="textDecNone"><div className="text-medium2">Bus/Tampo</div></HashLink>
      <Link to="/tours" className="textDecNone"><div className="text-medium2">Tours & Packages</div></Link>
      <Link to="/about" className="textDecNone"><div className="text-medium2">About</div></Link> */}
      <div className=" text-black-a9  flexC gap2 alignC textC">
        
        <HashLink smooth to="/#rentalPage" className="textDecNone"><div className="font-medium text-medium2 carHeading">Rental Cars
          {/* <ul className="flexC gap0">
            <Link className="textDecNone" to="/rentalPage/Crysta"><li>Rent Crysta</li></Link>
            <Link className="textDecNone" to="/rentalPage/Fortuner"><li>Rent Fortuner</li></Link>
            <Link className="textDecNone" to="/rentalPage/Ertiga"><li>Rent Ertiga</li></Link>
            <Link className="textDecNone" to="/rentalPage/Hycross"><li>Rent Hycross</li></Link>
            <Link className="textDecNone" to="/rentalPage/Kia"><li>Rent Kia Carens</li></Link>
            <Link className="textDecNone" to="/rentalPage/Swift"><li>Rent Dzire</li></Link>
            <Link className="textDecNone" to="/rentalPage/HondaCity"><li>Rent Honda City</li></Link>
            <Link className="textDecNone" to="/rentalPage/vernaFacelift"><li>Rent Verna</li></Link>
          </ul> */}
           </div></HashLink>
        <HashLink smooth to="/#rentalPage" className="textDecNone"><div className="font-medium1 text-medium2">Bus/Tempo</div></HashLink>
        <HashLink smooth to="/#travelPackages" className="textDecNone"><div className="font-medium1 text-medium2">Tours & Packages</div></HashLink>
        
        {/* <Link to="/contactDetails" className="textDecNone"><div className="font-medium1 text-sm1">Contact us</div></Link> */}
        
        <div className="flex alignC gap00">
          <div className="imgBox"><img src={call} alt="varanasi taxi rental logo" /></div>
          
          <div className="flexC">
            <h1 className="text-sm1 noWrap" >need help ? </h1>
            <a className="textDecNone" href="tel:9250028001" target="_blank"><div className="flexC">
              <div className="text-pink text-medium2">9250028001</div>
              {/* <div className="text-pink text-sm1">9335359900</div> */}
            </div>
            </a>
            
          </div>
        </div>
        
      
      </div>
      
      
    </div>

    </div>

    
  )
}

export default Header