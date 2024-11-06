import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../rentalDetailPage/RentalDetailPage.css";
import Slider from "../Slider/Slider";
import { useEffect } from "react";
import { useState } from "react";

// import ice from "/images/logos/ice.png"
// import seat from "/images/logos/seat.png"
// import aid from "/images/logos/aid.png"
// import bluetooth from "/images/logos/bluetooth.png"
import gps from "/images/logos/gps.png"


const TravelDetailPage = ({name1, name2,desc, travelImages, rental1, rental2,rental3, rental4, rental5, rental6, rental7, rental8, rental9,rental10, rental11, rental12, rental13, extra1, extra2="30", extra3, extra4, extra5, extra6, extra7, extra8, extra9, extra10, extra11, extra12, extra13, distance, place1, place2, place4, place5, place3, days="1 Day", whatsappLink}) =>{
    const [packagePrice, setPackagePrice ]= useState(rental1)
    const [extraPrice, setExtraPrice ]= useState(extra1)
    function updatePackagePrice(e){
        const selectedOption = e.target.value
        if (selectedOption == "package1") {
            setPackagePrice(rental1)
            setExtraPrice(extra1)
            console.log("changed")
        }else if (selectedOption == "package2") {
            setPackagePrice(rental2)
            setExtraPrice(extra2)
            console.log("changed")
        }else if (selectedOption == "package3") {
            setPackagePrice(rental3)
            setExtraPrice(extra3)
            console.log("changed")
        }else if (selectedOption == "package4") {
            setPackagePrice(rental4)
            setExtraPrice(extra4)
            console.log("changed")
        }else if (selectedOption == "package5") {
            setPackagePrice(rental5)
            setExtraPrice(extra5)
            console.log("changed")
        }else if (selectedOption == "package6") {
            setPackagePrice(rental6)
            setExtraPrice(extra6)
            console.log("changed")
        }else if (selectedOption == "package7") {
            setPackagePrice(rental7)
            setExtraPrice(extra7)
            console.log("changed")
        }else if (selectedOption == "package8") {
            setPackagePrice(rental8)
            setExtraPrice(extra8)
            console.log("changed")
        }else if (selectedOption == "package9") {
            setPackagePrice(rental9)
            setExtraPrice(extra9)
            console.log("changed")
        }else if (selectedOption == "package10") {
            setPackagePrice(rental10)
            setExtraPrice(extra10)
            console.log("changed")
        }else if (selectedOption == "package11") {
            setPackagePrice(rental11)
            setExtraPrice(extra11)
            console.log("changed")
        }else if (selectedOption == "package12") {
            setPackagePrice(rental12)
            setExtraPrice(extra12)
            console.log("changed")
        }else if (selectedOption == "package13") {
            setPackagePrice(rental13)
            setExtraPrice(extra13)
            console.log("changed")
        }
    
    }

    return(

        <div className="font-sans"> 
            <Header />
            <main className="pi1 pb1_5 " id="mainSection">
                <div className="gap1_5 flexC ">
                    <div>
                        <div className='rental text-sm font-medium1 noWrap'>{name2}</div>
                        <h1 className='text-medium font-medium'> {name1}</h1>
                        {/* <ul className="flex gap0">
                            <li>{capacity} People</li>
                            <li>{fuelType}</li>
                            <li>Bags</li>
                        </ul> */}
                    </div>
                    <div className="flexC gap1">
                        <h3 className="text-sm1 font-medium">Choose Vehicle</h3>
                        <select name="package" id="package" className="text-medium1" onChange={updatePackagePrice} autoFocus >
                            <option value="package1" >Tempo Traveller (10-16 Seat)</option>
                            <option value="package2">Urbania</option>
                            <option value="package3">Tempo Traveller (9-14 Seat)</option>
                            <option value="package4">Tempo Traveller (17-20 Seat)</option>
                            <option value="package5">Tempo Traveller (21-25 Seat)</option>
                            <option value="package6">Innova Crysta</option>
                            <option value="package7">Hycross</option>
                            <option value="package8">Ertiga</option>
                            <option value="package9">Kia Carens</option>
                            <option value="package10">Fortuner</option>
                            <option value="package11">Dzire</option>
                            <option value="package12">Honda City</option>
                            <option value="package13">Verna</option>
                            
                        </select>
                    </div>
                    <div className="break"></div>
                    <div className="flexC gap1_5">
                        <div className="fleC gap0">
                            <h3 className="text-medium1_0 font-medium">Price</h3>
                            <div className="text-medium1 text-pink font-medium1">₹{packagePrice}</div>
                        </div>
                        <div className="flex gap2">
                            <div className="flexC gap0">
                                <div className="text-sm1">Allowed Distance</div>
                                <div className="text-medium1_0 font-medium">{distance} Km (Roundtrip)</div>
                            </div>
                            <div className="flexC gap0">
                                <div className="text-sm1">Extra Per/KM</div>
                                <div className="text-medium1_0 font-medium">₹{extraPrice}</div>
                            </div>
                            
                            <div className="flexC gap0">
                                <div className="text-sm1">Included</div>
                                <div className="text-medium1_0 font-medium">Toll, Parking</div>
                            </div>
                            
                        </div>
                        <a className="textDecNone" href={whatsappLink} target="_blank" rel="noopener noreferrer"><button className="bookButton2 text-sm1">Book Tour </button></a>
                    </div>

                </div>
                <div className="imgBox4">
                    <img src={travelImages} alt="" />
                    {/* <Slider /> */}
                </div>


            </main>
            <section className="pi1 pb2 ">
                <div className="flexC gap0">
                    <h2 className="text-medium1 font-medium">Itinerary</h2>
                    <p className="text-black-a9">{desc}</p>
                </div>
                
            </section>
            <section className="featurePage pi1">
                
                <div className="flex alignC gap1">
                    <div className="img5Container">
                        <div className="imgBox5"><img src={gps} alt="" /></div>
                    </div>
                    <div className="flexC gap0">
                        <h4 className="text-medium1 font-medium">{place1}</h4>
                        
                    </div>
                </div>
                <div className="flex alignC gap1">
                    <div className="img5Container">
                        <div className="imgBox5"><img src={gps} alt="" /></div>
                    </div>
                    <div>
                        <h4 className="text-medium1 font-medium">{place2}</h4>

                    </div>
                </div>
                <div className="flex alignC gap1">
                    <div className="img5Container">
                        <div className="imgBox5"><img src={gps} alt="" /></div>
                    </div>
                    <div>
                        <h4 className="text-medium1 font-medium">{place3}</h4>

                    </div>
                </div>
                <div className="flex alignC gap1">
                    <div className="img5Container">
                        <div className="imgBox5"><img src={gps} alt="" /></div>
                    </div>
                    <div>
                        <h4 className="text-medium1 font-medium">{place4}</h4>
                        
                    </div>
                </div>
                <div className="flex alignC gap1">
                    <div className="img5Container">
                        <div className="imgBox5"><img src={gps} alt="" /></div>
                    </div>
                    <div>
                        <h4 className="text-medium1 font-medium">{place5}</h4>
                        
                    </div>
                </div>
                
               
            </section>
            <Footer />
        </div>
    )
}

export default TravelDetailPage;