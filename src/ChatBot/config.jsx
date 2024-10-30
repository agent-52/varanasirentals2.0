import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options/Options"
import { CarButtons } from "./CarButtons/CarButtons";
import { CarPackages, TempoPackages, BusPackages } from "./CarPackages/CarPackages";
import { TempoButtons, PremiumButtons, BusButtons } from "./CarButtons/CarButtons";



const config = {
  botName: "Taxi Bot",

  initialMessages: [
    
    createChatBotMessage("Welcome to Varansi taxi rentals"),
    createChatBotMessage(`What can we help you with ?`,{
      widget: "options"
    } ),
     
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: 'red',
      
    },
    chatButton: {
      backgroundColor: '#FF2C38',
    },
  },
  widgets: [
    {
      widgetName: 'options',
      widgetFunc: (props) => <Options {...props} />,
      // props:{

      // }
    },
    {
      widgetName: 'carButtons',
      widgetFunc: (props) => <CarButtons {...props} />,
      // props:{

      // }
    },
    {
      widgetName: 'tempoButtons',
      widgetFunc: (props) => <TempoButtons {...props} />,
      
    },
    {
      widgetName: 'premiumButtons',
      widgetFunc: (props) => <PremiumButtons {...props} />,
      
    },
    {
      widgetName: 'busButtons',
      widgetFunc: (props) => <BusButtons {...props} />,
      
    },

    //car types

    {
      widgetName: 'crystaPackages',
      widgetFunc: (props) => <CarPackages {...props} />,
      props:{
        link1:"https://wa.me/919250028001?text=Hi%20I%20want%20Innova%20Crysta%20on%20rent%20for%20Airport%20Pick/Drop",
        link2:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Innova%20Crysta",
        link3:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Innova%20Crysta",
        link4:"tel:9250028001"
      }
    },
    {
      widgetName: 'fortunerPackages',
      widgetFunc: (props) => <CarPackages {...props} />,
      props:{
        link1:"https://wa.me/919250028001?text=Hi%20I%20want%20Fortuner%20on%20rent%20for%20Airport%20Pick/Drop",
        link2:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Fortuner",
        link3:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Fortuner",
        link4:"tel:9250028001"
      }
    },
    {
      widgetName: 'hycrossPackages',
      widgetFunc: (props) => <CarPackages {...props} />,
      props:{
        link1:"https://wa.me/919250028001?text=Hi%20I%20want%20Hycross%20on%20rent%20for%20Airport%20Pick/Drop",
        link2:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Hycross",
        link3:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Hycross",
        link4:"tel:9250028001"
      }
    },
    {
      widgetName: 'ertigaPackages',
      widgetFunc: (props) => <CarPackages {...props} />,
      props:{
        link1:"https://wa.me/919250028001?text=Hi%20I%20want%20Ertiga%20on%20rent%20for%20Airport%20Pick/Drop",
        link2:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Ertiga",
        link3:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Ertiga",
        link4:"tel:9250028001"
      }
    },
    {
      widgetName: 'kiaPackages',
      widgetFunc: (props) => <CarPackages {...props} />,
      props:{
        link1:"https://wa.me/919250028001?text=Hi%20I%20want%20Kia%20Carens%20on%20rent%20for%20Airport%20Pick/Drop",
        link2:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Kia%20Carens",
        link3:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Kia%20Carens",
        link4:"tel:9250028001"
      }
    },
    {
      widgetName: 'hondaCityPackages',
      widgetFunc: (props) => <CarPackages {...props} />,
      props:{
        link1:"https://wa.me/919250028001?text=Hi%20I%20want%20Honda%20City%20on%20rent%20for%20Airport%20Pick/Drop",
        link2:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Honda%20City",
        link3:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Honda%20City",
        link4:"tel:9250028001"
      }
    },
    {
      widgetName: 'vernaPackages',
      widgetFunc: (props) => <CarPackages {...props} />,
      props:{
        link1:"https://wa.me/919250028001?text=Hi%20I%20want%20Verna%20Facelift%20on%20rent%20for%20Airport%20Pick/Drop",
        link2:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Verna%20Facelift",
        link3:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Verna%20Facelift",
        link4:"tel:9250028001"
      }
    },
    {
      widgetName: 'dzirePackages',
      widgetFunc: (props) => <CarPackages {...props} />,
      props:{
        link1:"https://wa.me/919250028001?text=Hi%20I%20want%20Dzire%20on%20rent%20for%20Airport%20Pick/Drop",
        link2:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Dzire",
        link3:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20Dzire",
        link4:"tel:9250028001"
      }
    },

    //tempo types

    {
      widgetName: '10SPackages',
      widgetFunc: (props) => <TempoPackages {...props} />,
      props:{
        link1:"https://wa.me/919250028001?text=Hi%20I%20want%20a%2010%20seater%20Tempo%20traveller%20on%20rent%20for%20Airport%20Pick/Drop",
        link2:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%2010%20seater%20Tempo%20traveller",
        link3:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%2010%20seater%20Tempo%20traveller",
        link4:"tel:9250028001"
      }
    },
    {
      widgetName: '17SPackages',
      widgetFunc: (props) => <TempoPackages {...props} />,
      props:{
        link1:"https://wa.me/919250028001?text=Hi%20I%20want%20a%2017%20seater%20Tempo%20traveller%20on%20rent%20for%20Airport%20Pick/Drop",
        link2:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%2017%20seater%20Tempo%20traveller",
        link3:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%2017%20seater%20Tempo%20traveller",
        link4:"tel:9250028001"
      }
    },
    {
      widgetName: '21SPackages',
      widgetFunc: (props) => <TempoPackages {...props} />,
      props:{
        link1:"https://wa.me/919250028001?text=Hi%20I%20want%20a%2021%20seater%20Tempo%20traveller%20on%20rent%20for%20Airport%20Pick/Drop",
        link2:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%2021%20seater%20Tempo%20traveller",
        link3:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%2021%20seater%20Tempo%20traveller",
        link4:"tel:9250028001"
      }
    },
    {
      widgetName: 'urbaniaPackages',
      widgetFunc: (props) => <TempoPackages {...props} />,
      props:{
        link1:"https://wa.me/919250028001?text=Hi%20I%20want%20urbania%20on%20rent%20for%20Airport%20Pick/Drop",
        link2:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20urbania",
        link3:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20urbania",
        link4:"tel:9250028001"
      }
    },
    {
      widgetName: 'maharajaPackages',
      widgetFunc: (props) => <TempoPackages {...props} />,
      props:{
        link1:"https://wa.me/919250028001?text=Hi%20I%20want%20maharaja%20on%20rent%20for%20Airport%20Pick/Drop",
        link2:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20maharaja",
        link3:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20maharaja",
        link4:"tel:9250028001"
      }
    },

    //buses

    {
      widgetName: 'minibus',
      widgetFunc: (props) => <BusPackages {...props} />,
      props:{  
        link1:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%2030-35%20seater%20Mini%20bus",
        link2:"tel:9250028001"
      }
    },
    {
      widgetName: '40seaterbus',
      widgetFunc: (props) => <BusPackages {...props} />,
      props:{  
        link1:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20%40%20seater%20Bus",
        link2:"tel:9250028001"
      }
    },
    {
      widgetName: '45seaterbus',
      widgetFunc: (props) => <BusPackages {...props} />,
      props:{  
        link1:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%20%45%20seater%20Bus",
        link2:"tel:9250028001"
      }
    },
    {
      widgetName: '49seaterbus',
      widgetFunc: (props) => <BusPackages {...props} />,
      props:{  
        link1:"https://wa.me/919250028001?text=Hi%20I'm%20interested%20in%20renting%2049%20seater%20Bus",
        link2:"tel:9250028001"
      }
    },


  ],
}

export default config