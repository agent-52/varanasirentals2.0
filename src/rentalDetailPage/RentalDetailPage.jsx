

const RentalDetailPage = ({name1, name2, image, capacity, fuelType}) =>{

    return(

        <div>
            <Header />
            <main>
                <div>
                    <div>
                        <div className='rental text-sm font-medium1 noWrap'>{name2}</div>
                        <h1>Hire {name1} in Varanasi</h1>
                        <ul className="flex gap0">
                            <li>{capacity} People</li>
                            <li>{fuelType}</li>
                            <li>Bags</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Choose Package</h3>
                        <select name="package" id="package">
                            <option value="package1">Standard - 8hr 80Km</option>
                            <option value="package2">Premium - 12hr 120Km</option>
                            <option value="airport">Airport Pick/Drop</option>
                        </select>
                    </div>
                    <div className="break"></div>
                    <div>
                        <div>
                            <h3>Rental</h3>
                            <div>₹{rental}</div>
                        </div>
                        <div className="flex">
                            <div>
                                <h4>Extra Per/KM</h4>
                                <div>₹{extra1}</div>
                            </div>
                            <div>
                                <h4>Extra Per/Hour</h4>
                                <div>₹{extra2}</div>
                            </div>
                            <div>
                                <h4>Driver Charge</h4>
                                <div>₹{driver}</div>
                            </div>
                            
                        </div>
                        <button>Book Now </button>
                    </div>

                </div>
                <div>
                    <img src={image} alt="" />
                </div>


            </main>
        </div>
    )
}

export default RentalDetailPage;