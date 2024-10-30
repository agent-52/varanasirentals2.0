import "../Options/Options.css"

const CarPackages = (props) =>{

    const options = [
        {
            text:"Airport Pick/Drop",
            link:props.link1,
            id:1,
        },
        {
            text:"8Hr/80Km",
            link:props.link2,
            id:2,
        },
        {
            text:"12Hr/120Km",
            link:props.link3,
            id:3,
        },
        {
            text:"Call us",
            link:props.link4,
            id:4
        }
    ]

    const buttonArray = options.map((option, index) => (
        <a href={option.link} target="_blank"><button key={option.id} className="option-button">{option.text}</button></a>
    ))

    return <div className="options-container">{buttonArray}</div>
}

const TempoPackages = (props) =>{

    const options = [
        {
            text:"Airport Pick/Drop",
            link:props.link1,
            id:1,
        },
        {
            text:"8Hr/80Km",
            link:props.link2,
            id:2,
        },
        {
            text:"Call us",
            link:props.link4,
            id:4, 
        }
        
    ]

    const buttonArray = options.map((option) => (
        <a href={option.link} target="_blank"><button key={option.id} className="option-button">{option.text}</button></a>
    ))

    return <div className="options-container">{buttonArray}</div>
}

export {CarPackages, TempoPackages};