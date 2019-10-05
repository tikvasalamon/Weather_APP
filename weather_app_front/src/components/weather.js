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


    getWeather = async (country, city) => {
        let result = await axios.post(`${URL}/weather`, { country, city });
        
        this.setState({ data: result.data, loading: false })
    }

    componentWillReceiveProps(props) {

        this.setState({ loading: true }, () => { this.getWeather(props.country, props.city);; })
    }

    componentDidMount() {

        this.setState({ loading: true }, () => { this.getWeather(this.props.country, this.props.city); })
    }

    render() {
        if (this.state.loading) {
            return (<div className="loader"><img src={loader} /></div>)
        }
        return (
            <WeatherDisplay cardClass={this.props.cardClass} weatherData={this.state.data} />
        );
    }
}

export default Weather;