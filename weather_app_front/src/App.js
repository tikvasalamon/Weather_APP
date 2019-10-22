import React, { Component } from 'react';
import './App.css';
import Weather from "./components/weather";
import SearchAndResult from "./components/searchAndResult";

class App extends Component {
  mainCities = [
    {
      country: "Israel",
      city: "Tel aviv"
    },
    {
      country: "Ethiopia",
      city: "Addis Ababa"
    },
    {
      country: "France",
      city: "Paris"
    }
  ]

  render() {
    return (
      <div className="app-container">

        <SearchAndResult />
        
        <div className="flex-container">

          {
            this.mainCities.map((item, i) => {
              return <Weather
                key={i}
                country={item.country}
                city={item.city}
              />
            })
          }
        </div>

        <div className="footer">
          <p>&copy; Tikva Salamon</p>
        </div>
      </div>
    );
  }
}

export default App;
