import './Card.css'

export default function Card({cardColor, iconSrc, carName, carDesc}) {
    return (
        <div className="card-container" style={{backgroundColor: cardColor}}>
            <div className="car-info">
                <div className="icon-container">
                    <img src={iconSrc} alt="Car Icon" />
                </div>
                <div className="car-name">{carName}</div>
                <div className="car-desc">{carDesc}</div>
            </div>
            <button 
                className="learn-more-btn"
                style={{color: cardColor}}
            >
                Learn More
            </button>
        </div>
    )
}