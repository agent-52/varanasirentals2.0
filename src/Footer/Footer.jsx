import Button from "../Button/Button"
const Footer = () =>{
    return(
        <div className="pi1 font-sans footer pb1_5 ">
            <div className="grid gap1">
                <h1 className="text-medium2">Contact Us</h1>
                <div className="flexC gap0">
                <div className="text-sm1">+91 7355657613</div>
                <div className="text-sm1">arsingh484@gmail.com</div>
                
                </div>
                <button className="text-sm1 font-medium">Chat Now</button>
            </div>
            <div className="grid gap1">
                <h1 className="text-medium2">Address</h1>
                <div className="text-sm1 maxW30ch">N 12/237 L-5-R Judge colony mahmoorganj varanasi Uttar Pradesh  221010</div>
                <button className="text-sm1 font-medium">Get Directions</button>
            </div>
            <div className="grid gap1">
                <h1 className="text-medium2">Review</h1>
                <div className="text-sm1 maxW30ch">Your reviews help others to find us, and gives us an introspection</div>
                <button className="text-sm1 font-medium">Write Review</button>
            </div>
            <div className="grid">
                <h1 className="text-medium2">Our Socials</h1>
                <a href="" className="textDecNone "><div className="imgBox3"><img src="" alt="" /></div></a>
                <a href="" className="textDecNone "><div className="imgBox3"><img src="" alt="" /></div></a>
                <a href="" className="textDecNone "><div className="imgBox3"><img src="" alt="" /></div></a>
            </div>
        </div>
    )
}

export default Footer