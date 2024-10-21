import "./CarCard.css"
import stars from "/images/logos/stars.png"
import car1 from "/images/carImages/kia.jpg"


const CarCard = ({name="Toyota sports",airportRate, rate1, rate2, rate3, capacity, driverRate, rentName }) =>{

    return(
        <div className="flexC gap1 card">
            <div className="flexC gap0">
                <div className="carImgBox"><img src={car1} alt="" /></div>
                {/* <div className="priceBox"><span></span></div> */}
                <div className="reviewImgBox mgI1">
                    <img src={stars} alt="image of stars for review of varanasi rental cars" />
                </div>
            
            </div>
            
            <div className="flexC gap1 pi0 ">
                <h1>{name}</h1>
                <div className="break"></div>
                <ul className="flexC gap0 text-sm1">

                    <li>Airport Pick/Drop = {airportRate}</li>
                    <li>8Hr/80Km = ₹{rate1}</li>
                    <li>12Hr/120Km = ₹{rate2}</li>
                    <li>Extra range = ₹{rate3}/Km</li>
                    <li>Driver Charge = ₹{driverRate}</li>
                    <li>Capacity = {capacity}</li>
                </ul>
                <button className="bookButton font-medium1 text-sm1">Book {rentName}</button>
            </div>
        </div>
    )
}

export default CarCard;