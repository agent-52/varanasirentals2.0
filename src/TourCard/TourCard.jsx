import { useState } from "react";
import "./TourCard.css"

import rupee from "/images/logos/rupee.png"
import time from "/images/logos/time.png"
import location from "/images/logos/location1.png"
import distanceIcon from "/images/logos/distance.png"
import parking from "/images/logos/parking.png"
import bus from "/images/logos/bus.png"


const TourCard = ({name="",price1="8,500", distance="250",placesCovered="Triveni Sangam , Sleeping Hanuman Temple, Akshay Vat, Alopi Devi Temple,  Anand Bhavan", desc="A compact travell package from Varanasi to Prayagraj (Allahabad) designed to cover all the prominent sights between Varanasi and Prayagraj (Allahbad) like Triveni Sangam, Sleeping Hanuman Temple, Akshay Vat, Alopi Devi temple, Anand Bhavan", days="1 day", image="/images/carImages/kia.jpg" }) =>{

    return(
        <div className=" gap0 tourcard">
            
            <div className="carImgBox"><img id="carImg" src={image} alt="image of the respective tour package" /></div>

                
            
            
            
            <div className="flexC gap1 pi0 ">
                <h1>{name}</h1>
                <p className="text-black-a9">{desc}</p>
                <div className="break"></div>
                <ul className="flexC gap1 text-sm1 text-black-a9">

                    <li className="flex gap0 alignC">
                        <div className="imgBox"><img src={rupee} alt="" /></div>
                        <div>Stating from <span>₹{price1}/-</span></div>
                    </li>

                    <li className="flex gap0 alignC">
                        <div className="imgBox"><img src={time} alt="" /></div>
                        <div>Duration =  {days}</div>
                    </li>
                    <div className="flexC gap00">
                        <li className="flex gap0 alignC">
                            <div className="imgBox"><img src={location} alt="" /></div>
                            <h2 className="text-sm1">Places Covered :</h2>
                        </li>
                        <p className="pdL0"> {placesCovered}</p>
                    </div>
                    
                    <li className="flex gap0 alignC">
                        <div className="imgBox"><img src={distanceIcon} alt="" /></div>
                        <div>Distance (Round trip) =  {distance} Km</div>
                    </li>
                    <li className="flex gap0 alignC">
                        <div className="imgBox"><img src={parking} alt="" /></div>
                        <div>Toll and Parking fare included</div>
                    </li>
                    <li className="flex gap0 alignC">
                        <div className="imgBox"><img src={bus} alt="" /></div>
                        <div>Vehicles =  Urbania, Traveller(10-16 seater)</div>
                    </li>
                </ul>
                
            </div>
            <button className="pi0 bookButton font-medium1 text-sm1 mgT1">Book Now </button>
        </div>
    )
}


export default TourCard;