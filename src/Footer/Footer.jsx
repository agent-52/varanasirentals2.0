import Button from "../Button/Button"
import phoneIcon from "/images/logos/phone.png"
import mailIcon from "/images/logos/email.png"
import locationIcon from "/images/logos/location.png"
import instaIcon from "/images/logos/insta.png"
import whatsappIcon from "/images/logos/wapp.png"
import ytIcon from "/images/logos/yt.png"


const Footer = () =>{
    return(
        <div className="pi1 font-sans footer pb1_5 ">
            <div className="grid gap1">
                <h1 className="text-medium2">Contact Us</h1>
                <div className="flexC gap0">
                <div className="flex gap0">
                    <div className="imgBox3"><img src={phoneIcon} alt="phone icon of varanasi taxi rental" /></div>
                    <a className="textDecNone" href="tel:9250028001"><div className="text-sm1">+91 9250028001                    </div></a>
                </div>
                <div className="flex gap0">
                    <div className="imgBox3"><img src={phoneIcon} alt="phone icon of varanasi taxi rental" /></div>
                    <a className="textDecNone" href="tel:9335359900"><div className="text-sm1">+91 9335359900</div></a>
                </div>
                <div className="flex gap0">
                    <div className="imgBox3"><img src={mailIcon} alt="mail icon of varanasi taxi rentals" /></div>
                    <div className="text-sm1">varanasirentaltaxi@gmail.com</div>
                </div>
                
                </div>
                <a href="https://wa.me/919250028001?text=Hi" className="textDecNone" target="_blank"><button className="text-sm1 font-medium">Chat Now</button></a>
            </div>
            <div className="grid gap1">
                <h1 className="text-medium2">Address</h1>
                <div className="flex gap0">
                    <div className="imgBox3"><img src={locationIcon} alt="location icon of varanasi taxi rental" /></div>
                    <div className="text-sm1 maxW30ch">N 12/237 L-5-R Judge colony mahmoorganj varanasi Uttar Pradesh  221010</div>
                </div>
                
                <button className="text-sm1 font-medium">Get Directions</button>
            </div>
            <div className="grid gap1">
                <h1 className="text-medium2">Review</h1>
                <div className="text-sm1 maxW30ch">Your reviews help others to find us, and gives us an introspection</div>
                <button className="text-sm1 font-medium">Write Review</button>
            </div>
            <div className="grid gap1">
                <h1 className="text-medium2">Our Socials</h1>
                <div className="flex gap1 justify-center">
                <a href="" className="textDecNone "><div className="imgBox3"><img src={instaIcon} alt="instagram icon with the link of varanasi taxi rental" /></div></a>
                <a href="" className="textDecNone "><div className="imgBox3"><img src={ytIcon} alt="youtube icon with the link of varanasi taxi rental" /></div></a>
                <a href="https://wa.me/919250028001?text=Hi" className="textDecNone "><div className="imgBox3"><img src={whatsappIcon} alt="whatsapp icon with the link of varanasi taxi rental" /></div></a>
                </div>
            </div>
        </div>
    )
}

export default Footer