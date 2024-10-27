import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options/Options"
import { CarButtons } from "./CarButtons/CarButtons";
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

  ],
}

export default config