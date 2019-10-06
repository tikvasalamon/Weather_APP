import React, { Component } from 'react';
import axios from "axios";

import loader from '../assets/images/loader.gif'
import { URL } from "../config";
import WeatherDisplay from "./weatherDisplay";

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loading: false
        }
    }

    //get the city weather from the server and turn off the loading
    getWeather = async (country, city) => {
        let result = await axios.post(`${URL}/weather`, { country, city });
        
        this.setState({ data: result.data, loading: false })
    }

    //every time the component get props
    componentWillReceiveProps(props) {
        //turn on the loading and call the getWeather function
        this.setState({ loading: true }, () => { this.getWeather(props.country, props.city);; })
    }

    //first time component is loading
    componentDidMount() {
        //turn on the loading and call the getWeather function
        this.setState({ loading: true }, () => { this.getWeather(this.props.country, this.props.city); })
    }

    render() {
        //display the loading icon or sending the weather data 
        //to displayWeather component if the loading ended 
        if (this.state.loading) {
            return (<div className="loader"><img src={loader} /></div>)
        }
        return (
            <WeatherDisplay cardClass={this.props.cardClass} weatherData={this.state.data} />
        );
    }
}

export default Weather;