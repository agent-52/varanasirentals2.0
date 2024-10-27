import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./RentalDetailPage.css";
import Slider from "../Slider/Slider";
import { useEffect } from "react";
import { useState } from "react";


const RentalDetailPage = ({name1, name2, carImages, capacity, fuelType, rental1, rental2, rental3 , extra1, extra2, driver}) =>{
    const [packagePrice, setPackagePrice ]= useState(rental1)
    function updatePackagePrice(e){
        const selectedOption = e.target.value
        if (selectedOption == "package1") {
            setPackagePrice(rental1)
            console.log("changed")
        }else if (selectedOption == "package2") {
            setPackagePrice(rental2)
            console.log("changed")
        }else if (selectedOption == "airport") {
            setPackagePrice(rental3)
            console.log("changed")
        }
    }

    return(

        <div className="font-sans"> 
            <Header />
            <main className="pi1 pb1_5 " id="mainSection">
                <div className="gap1_5 flexC">
                    <div>
                        <div className='rental text-sm font-medium1 noWrap'>{name2}</div>
                        <h1 className='text-medium font-medium'>Hire {name1} in Varanasi</h1>
                        {/* <ul className="flex gap0">
                            <li>{capacity} People</li>
                            <li>{fuelType}</li>
                            <li>Bags</li>
                        </ul> */}
                    </div>
                    <div className="flexC gap1">
                        <h3 className="text-sm1 font-medium">Choose Package</h3>
                        <select name="package" id="package" className="text-medium1" onChange={updatePackagePrice}>
                            <option value="package1" >Standard - 8hr 80Km</option>
                            <option value="package2">Premium - 12hr 120Km</option>
                            <option value="airport">Airport Pick/Drop</option>
                        </select>
                    </div>
                    <div className="break"></div>
                    <div className="flexC gap1_5">
                        <div className="fleC gap0">
                            <h3 className="text-medium1_0 font-medium">Rental</h3>
                            <div className="text-medium1 text-pink font-medium1">₹{packagePrice}</div>
                        </div>
                        <div className="flex gap2 wrap">
                            <div className="flexC gap0">
                                <div className="text-sm1">Extra Per/KM</div>
                                <div className="text-medium1_0 font-medium">₹{extra1}</div>
                            </div>
                            <div className="flexC gap0">
                                <div className="text-sm1">Extra Per/Hour</div>
                                <div className="text-medium1_0 font-medium">₹{extra2}</div>
                            </div>
                            <div className="flexC gap0">
                                <div className="text-sm1">Driver Charge</div>
                                <div className="text-medium1_0 font-medium">₹{driver}</div>
                            </div>
                            
                        </div>
                        <button className="bookButton2 text-sm1">Book Now </button>
                    </div>

                </div>
                <div className="imgBox4">
                    <img src={carImages} alt="" />
                    {/* <Slider /> */}
                </div>


            </main>
            <section className="featurePage pi1">
                <div>
                    <div>
                        <div><img src="" alt="" /></div>
                    </div>
                    <div>
                        <h4>Air Condition</h4>
                        <div className="tex-sm">All our cars comes with Air Conditioner as standard to keep you comfortable.</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div><img src="" alt="" /></div>
                    </div>
                    <div>
                        <h4>Airbags</h4>
                        <div className="text-sm">Our cars comes with factory fitted air bags to keep you safe.</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div><img src="" alt="" /></div>
                    </div>
                    <div>
                        <h4>GPS Tracker</h4>
                        <div className="text-sm">Your safety is our priorty, to keep you safe all our cars fitted with gps trackers & are monitored round the clock.</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div><img src="" alt="" /></div>
                    </div>
                    <div>
                        <h4>Bluetooth</h4>
                        <div className="text-sm">Our cars have an excellent bluetooth connectivity to keep you entertained.</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div><img src="" alt="" /></div>
                    </div>
                    <div>
                        <h4>First Aid Kit</h4>
                        <div>First aid kits are mandatroy in our cars.</div>
                    </div>
                </div>
               
            </section>
            <Footer />
        </div>
    )
}

export default RentalDetailPage;