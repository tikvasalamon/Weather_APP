import React,{ useState } from 'react';

import './weatherDisplay.css';

const WeatherDisplay = (props) => {
    const cardClasss = props.cardClass ? props.cardClass : 'weather-card';

    const [expand,setExpand] = useState(false);
    const [cardClass,setCardClass] = useState(cardClasss)

    //changes the div class for expanig or unexpending
    const expandCard = () => {
        if (!expand) {
            setCardClass('weather-card expand');
            setExpand(true);
        }
        else{
            setCardClass('weather-card')
            setExpand(false);
        }
    }
  
    if (!props.weatherData) {
        return <h1 className="not-found">No result</h1>;
    }
    return (
        <div className={cardClass}>
            <div onClick={expandCard} className="expand-btn">
                <i class="fas fa-arrows-alt-v"></i>
            </div>
            <div className="weather-content">
                <h1>{props.weatherData.name}</h1>
                <h2>Now</h2>
                <p className="p-lg">{props.weatherData.desc}</p>
                <p className="p-lg">{props.weatherData.temper}</p>
                <p>{props.weatherData.humidity}</p>
                <p>Windspeed: {props.weatherData.wind}</p>
                <p>Location: {props.weatherData.location}</p>
                <p>{props.weatherData.time}</p>
            </div>
            <div className="weather-icon">
                <img src={props.weatherData.icon} />
            </div>
        </div>
    );
};

export default WeatherDisplay;