import "./TourArray.css"
import TourCard from "../TourCard/TourCard";

const TourArray = ({}) =>{

    return(
        <div className="tourCardArray gap2 pi1">
            <TourCard name="Varanasi -> Allahabad" routeLink="/tours/varanasi-allahabad" />
            <TourCard name="Varanasi -> Allahabad -> Sitamarhi -> Vindhyachal"/>
            <TourCard name="Varanasi -> Vindhyachal -> Chunar" />
            <TourCard name="Varanasi -> Ayodhya" />
            <TourCard name="Varanasi -> Prayagraj -> Ayodhya" />
            <TourCard name="Varanasi -> Gaya -> Bodhgaya" />
        </div>
    )
}

export default TourArray;