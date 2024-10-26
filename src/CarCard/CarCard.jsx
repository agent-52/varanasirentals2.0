import "./CarCard.css"
import stars from "/images/logos/stars.png"
import car1 from "/images/carImages/kia.jpg"
import { Link } from "react-router-dom"

const CarCard = ({name="Toyota sports",airportRate="700", rate1, rate2, rate3, capacity, driverRate, rentName, carImage="/images/carImages/kia.jpg", routeLink="/" }) =>{

    return(
        <div className="flexC gap1 card">
            <div className="flexC gap0">
                <div className="carImgBox"><img id="carImg" src={carImage} alt="image of the respective car" /></div>
                {/* <div className="priceBox"><span></span></div> */}
                <div className="reviewImgBox mgI1">
                    <img  src={stars} alt="image of stars for review of varanasi rental cars" />
                </div>
            
            </div>
            
            <div className="flexC gap1 pi0 ">
                <h1>{name}</h1>
                <div className="break"></div>
                <ul className="flexC gap0 text-sm1 text-black-a9">

                    <li>Airport Pick/Drop = ₹{airportRate}</li>
                    <li>8Hr/80Km = ₹{rate1}</li>
                    <li>12Hr/120Km = ₹{rate2}</li>
                    <li>Extra range = ₹{rate3}/Km</li>
                    <li>Driver Charge = ₹{driverRate}</li>
                    <li >Capacity = {capacity}</li>
                </ul>
                <Link className="textDecNone" to={routeLink}><button className="bookButton font-medium1 text-sm1">Book {rentName}</button></Link>
            </div>
        </div>
    )
}

const TempoCard = ({name="",airportRate="700", rate1, rate3, capacity, driverRate, image="/images/carImages/kia.jpg", routeLink="/" }) => {

    return(
        <div className="flexC gap1 card">
            <div className="flexC gap0">
                <div className="carImgBox"><img id="carImg" src={image} alt="image of the respective car" /></div>
                {/* <div className="priceBox"><span></span></div> */}
                <div className="reviewImgBox mgI1">
                    <img  src={stars} alt="image of stars for review of varanasi rental cars" />
                </div>
            
            </div>
            
            <div className="flexC gap1 pi0 ">
                <h1>{name}</h1>
                <div className="break"></div>
                <ul className="flexC gap0 text-sm1 text-black-a9">
                    <li className="font-medium1">Capacity = {capacity}</li>

                    <li>Airport Pick/Drop = ₹{airportRate}</li>
                    <li>8Hr/80Km = ₹{rate1}</li>
                    <li>Extra range = ₹{rate3}/Km</li>
                    <li>Driver Charge = ₹{driverRate}</li>
                    
                </ul>
                <Link className="textDecNone" to={routeLink}><button className="bookButton font-medium1 text-sm1">Book Now</button></Link>
            </div>
        </div>
    )
}

const PremiumCard = ({name="", image="/images/carImages/kia.jpg", routeLink="/" }) => {

    return(
        <div className="flexC gap1 card">
            <div className="flexC gap0">
                <div className="carImgBox"><img id="carImg" src={image} alt="image of the respective car" /></div>
                {/* <div className="priceBox"><span></span></div> */}
                {/* <div className="reviewImgBox mgI1">
                    <img  src={stars} alt="image of stars for review of varanasi rental cars" />
                </div> */}
            
            </div>
            
            <div className="flexC gap1 pi0 ">
                <h1>{name}</h1>
                <div className="break"></div>
                
                <Link className="textDecNone" to={routeLink}><button className="bookButton font-medium1 text-sm1">Make Reservation</button></Link>
            </div>
        </div>
    )
}

export {CarCard, TempoCard, PremiumCard};