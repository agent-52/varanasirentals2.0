import "./TourArray.css"
import TourCard from "../TourCard/TourCard";

const TourArray = ({}) =>{

    return(
        <div className="tourCardArray gap2 pi1">
            <TourCard name="Varanasi -> Allahabad" image="/images/tour/triveniSangam.jpg" routeLink="/tours/varanasi-allahabad" />
            <TourCard name="Varanasi -> Allahabad -> Sitamarhi -> Vindhyachal" image="/images/tour/AanandBhavan1.webp" routeLink="/tours/varanasi-Sitamarhi" desc="We designed a concise package where you wil experience Triveni Sangam, Sleeping Hanuman Temple, Akshay Vat, Alopi Devi Temple and Anand Bhavan. Leave for Sita Samahit Sthal (Sitamarhi Temple) , Vindhyachal Temple and back to Varanasi" price1="9,500" distance="300" placesCovered="Triveni Sangam, Sleeping Hanuman Temple, Akshay Vat, Alopi Devi Temple,  Anand Bhavan, Sita Samahit Sthal, Vindhyachal Temple "/>
            <TourCard name="Varanasi -> Vindhyachal -> Chunar"  image="/images/tour/chunarFort.jpg" routeLink="/tours/varanasi-Chunar" desc="Experience a compact package where you wil visit  Vindhyachal Temple, o Chunar Fort and buy the famous Pottery of Chunar for your memory and back to Varanasi" price1="7,500" distance="200" placesCovered=" Vindhyachal Temple,  Chunar Fort  "/>
            <TourCard name="Varanasi -> Ayodhya"  image="/images/tour/ramJanamBhoomi.jpg" routeLink="/tours/varanasi-Ayodhya" desc="A compact travell package from Varanasi to Ayodhya designed to cover all the prominent sights between Varanasi and Ayodhya like Saryu River,  Hanuman Garhi Temple, Ram Lala Temple, Sita Rasoi,  Dasrath Mahal,  Kanak Bhavan and back to Varanasi. 

            " price1="14,500" distance="450" placesCovered=" Saryu River,  Hanuman Garhi Temple, Ram Lala Temple, Sita Rasoi, Dasrath Mahal, Kanak Bhavan "/>
            <TourCard name="Varanasi -> Prayagraj -> Ayodhya" image="/images/tour/saryuRiver.jpg" routeLink="/tours/varanasi-Prayagraj-Ayodhya" desc="Embark on a 2 day trip from Varanasi to Prayagraj to Ayodhya where you will visit  Triveni Sangam and visit Temples nearby on day1 then  Saryu River,  Shri Ram Lala Temple, Hanuman Garhi Temple, Sita Rasoi, Dasrath Mahal, Kanak Bhavan and back to Varanasi. " days="2 days" price1="18,500" distance="550" placesCovered="Triveni Sangam, Saryu River,  Hanuman Garhi Temple, Ram Lala Temple, Sita Rasoi, Dasrath Mahal, Kanak Bhavan"/>
            <TourCard name="Varanasi -> Gaya -> Bodhgaya" image="/images/tour/80feet.jpg" routeLink="/tours/varanasi-Gaya-Bodhgaya" desc="A one day trip from Varanasi to Bodhgaya to experience  Vishnupad Temple,  Mangala Gauri Temple,  Mahabodhi Temple, 80 Feet Buddha Statue and  back to Varanasi " price1="16,500" distance="550" placesCovered=" Vishnupad Temple,  Mangala Gauri Temple,  Mahabodhi Temple, 80 Feet Buddha Statue "/>
        </div>
    )
}

export default TourArray;