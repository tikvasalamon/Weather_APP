import React, { Component } from 'react';

import Weather from "./weather";

class SearchAndResult extends Component {

    countryInput = "";
    cityInput = "";
    state = {
        country: '',
        city: '',
        search: false,
        errors: ''
    }

    handleChange = event => {
        if (event.target.name === "country") {
            this.countryInput = event.target.value;
        }
        else {
            this.cityInput = event.target.value;
        }
    };

    getCityWeather = () => {
        // testing if it's only english letters - 
        if (/[^a-z]/i.test(this.countryInput) || /[^a-z]/i.test(this.cityInput)) {

            this.setState({
                errors: 'Please use English',
                search: false
            })
        }

        //testing if one of the fields is empty
        else if (this.countryInput !== '' && this.cityInput !== '') {
            this.setState({
                country: this.countryInput,
                city: this.cityInput,
                search: true,
                errors: ''
            })
        }
        else {
            // one of the fields is empty
            this.setState({
                errors: 'Please set both fields',
                search: false
            })
        }
    }

    render() {
        return (
            <div>
                <div className="inputs-container">
                    <div className="layover">

                        <div className="inputs-flex-container">
                            <div className="input-group">
                                <i className="fas fa-globe-americas"></i>
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="Country..."
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="input-group">
                                <i className="fas fa-city"></i>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City..."
                                    onChange={this.handleChange}
                                />
                            </div>

                            <button onClick={() => this.getCityWeather()}><i class="fas fa-search"></i></button>
                        </div>
                        {this.state.errors !== '' && <div className="errors-wrapper"><p>{this.state.errors}</p></div>}
                    </div>
                </div>

                {
                    this.state.search && <Weather cardClass="search-card" country={this.state.country} city={this.state.city} />
                }
            </div>
        );
    }
}

export default SearchAndResult;