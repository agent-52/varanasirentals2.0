import { useState } from "react";
import "./TourCard.css"




const TourCard = ({name="",price1="8,500", distance="250",placesCovered="Triveni Sangam , Sleeping Hanuman Temple, Akshay Vat, Alopi Devi Temple,  Anand Bhavan", desc="A compact travell package from Varanasi to Prayagraj (Allahabad) designed to cover all the prominent sights between Varanasi and Prayagraj (Allahbad) like Triveni Sangam, Sleeping Hanuman Temple, Akshay Vat, Alopi Devi temple, Anand Bhavan", days="1 day", image="/images/carImages/kia.jpg" }) =>{

    return(
        <div className=" gap0 tourcard">
            
            <div className="carImgBox"><img id="carImg" src={image} alt="image of the respective tour package" /></div>

                
            
            
            
            <div className="flexC gap1 pi0 ">
                <h1>{name}</h1>
                <p className="text-black-a9">{desc}</p>
                <div className="break"></div>
                <ul className="flexC gap0 text-sm1 text-black-a9">

                    <li className="flex gap0 alignC">
                        <div className="imgBox"><img src="" alt="" /></div>
                        <div>Stating from <span>₹{price1}/-</span></div>
                    </li>

                    <li className="flex gap0 alignC">
                        <div className="imgBox"><img src="" alt="" /></div>
                        <div>Duration =  {days}</div>
                    </li>
                    <li className="flex gap0 alignC">
                        <div className="imgBox"><img src="" alt="" /></div>
                        <div>Places =  {placesCovered}</div>
                    </li>
                    
                    <li className="flex gap0 alignC">
                        <div className="imgBox"><img src="" alt="" /></div>
                        <div>Distance (Round trip) =  {distance}</div>
                    </li>
                    <li className="flex gap0 alignC">
                        <div className="imgBox"><img src="" alt="" /></div>
                        <div>Toll and Parking fare included</div>
                    </li>
                    <li className="flex gap0 alignC">
                        <div className="imgBox"><img src="" alt="" /></div>
                        <div>Vehicles =  Urbania, Traveller(10-16 seater)</div>
                    </li>
                </ul>
                
            </div>
            <button className="pi0 bookButton font-medium1 text-sm1">Book Now </button>
        </div>
    )
}


export default TourCard;