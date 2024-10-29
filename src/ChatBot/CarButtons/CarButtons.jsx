
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

const TempoButtons = (props) =>{

    const options = [
        {
            text:"10-16 Seater",
            handler: props.actionProvider.handle10Seater,
            id:1,
        },
        {
            text:"Urbania",
            handler: props.actionProvider.handleUrbania,
            id:2,
        },
        {
            text:"17-20 Seater",
            handler: props.actionProvider.handle17Seater,
            id:3,
        },
        {
            text:"21-25 Seater",
            handler: props.actionProvider.handle21Seater,
            id:4,
        },
        {
            text:"Maharaja",
            handler: props.actionProvider.handleMaharaja,
            id:5,
        },
        
        
    ]

    const buttonMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">{option.text}</button>
    ))

    return <div className="options-container">{buttonMarkup}</div>
}

const PremiumButtons = (props) =>{

    const options = [
        {
            text:"Mercedes Gls",
            handler: props.actionProvider.handleMGls,
            id:1,
        },
        {
            text:"Mercedes S Class",
            handler: props.actionProvider.handleMS,
            id:2,
        },
        {
            text:"Mercedes E Class",
            handler: props.actionProvider.handleMe,
            id:3,
        },
        {
            text:"Bmw X7",
            handler: props.actionProvider.handleBmwX7,
            id:4,
        },
        {
            text:"Bmw 5 Series",
            handler: props.actionProvider.handleBmw5,
            id:5,
        },
        {
            text:"Bmw 3 Series",
            handler: props.actionProvider.handleBmw3,
            id:5,
        },
        
    ]

    const buttonMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">{option.text}</button>
    ))

    return <div className="options-container">{buttonMarkup}</div>
}

const BusButtons = (props) =>{

    const options = [
        {
            text:"Mini Bus (30-35 Seater)",
            handler: props.actionProvider.handleMiniBus,
            id:1,
        },
        {
            text:"40 Seater",
            handler: props.actionProvider.handle40Seater,
            id:2,
        },
        {
            text:"45 Seater",
            handler: props.actionProvider.handle45Seater,
            id:3,
        },
        {
            text:"49 Seater",
            handler: props.actionProvider.handle49Seater,
            id:4,
        },
        
    ]

    const buttonMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">{option.text}</button>
    ))

    return <div className="options-container">{buttonMarkup}</div>
}


export  {CarButtons, TempoButtons, PremiumButtons, BusButtons};