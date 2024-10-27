import "./Options.css"

const Options = (props) =>{

    const options = [
        {
            text:"Rent Cars",
            handler: props.actionProvider.handleCarRental,
            id:1,
        },
        {
            text:"Rent Tempos",
            handler: props.actionProvider.handleTempoRental,
            id:2,
        },
        {
            text:"Rent Buses",
            handler: props.actionProvider.handleBusRental,
            id:3,
        },
        {
            text:"Premium Cars",
            handler: props.actionProvider.handlePremiumCarsRental,
            id:4,
        },
        {
            text:"Tour Packages",
            handler: props.actionProvider.handleTourPackages,
            id:5,
        },
    ]

    const buttonMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">{option.text}</button>
    ))

    return <div className="options-container">{buttonMarkup}</div>
}

export default Options;