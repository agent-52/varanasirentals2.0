
const CarButtons = (props) =>{

    const options = [
        {
            text:"Crysta",
            handler: props.actionProvider.handleCrysta,
            id:1,
        },
        {
            text:"Fortuner",
            handler: props.actionProvider.handleFortuner,
            id:2,
        },
        {
            text:"Hycross",
            handler: props.actionProvider.handleHycross,
            id:3,
        },
        {
            text:"Ertiga",
            handler: props.actionProvider.handleErtiga,
            id:4,
        },
        {
            text:"Kia",
            handler: props.actionProvider.handleKia,
            id:5,
        },
        {
            text:"Dzire",
            handler: props.actionProvider.handleDzire,
            id:6,
        },
    ]

    const buttonMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">{option.text}</button>
    ))

    return <div className="options-container">{buttonMarkup}</div>
}

export  {CarButtons};