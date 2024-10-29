import "./TourArray.css"
import TourCard from "../TourCard/TourCard";

const TourArray = ({}) =>{

    return(
        <div className="tourCardArray gap2 pi1">
            <TourCard name="Varanasi -> Allahabad" routeLink="/tours/varanasi-allahabad" desc="Morning after breakfast leave for Allahabad (125Km/03Hrs). After reaching Prayagraj,                      Go to Triveni Sangam (Confluence of 3 holy rivers Ganga, Yamuna and Saraswati) for taking dip and to do Tarpan or ancestral pooja (Veni Daan).                       Later visit Sleeping Hanuman Temple (Lying Statue Of Lord Hanuman), Akshay Vat, Alopi Devi Temple and Anand Bhavan (Closed on Monday) "/>
            <TourCard name="Varanasi -> Allahabad -> Sitamarhi -> Vindhyachal"/>
            <TourCard name="Varanasi -> Vindhyachal -> Chunar"/>
            <TourCard name="Varanasi -> Ayodhya"/>
            <TourCard name="Varanasi -> Prayagraj -> Ayodhya"/>
            <TourCard name="Varanasi -> Gaya -> Bodhgaya"/>
        </div>
    )
}

export default TourArray;