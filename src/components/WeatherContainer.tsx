import React from 'react';
import { fetchWeatherFromApi } from './../api/weather'

class WeatherContainer extends React.Component {
    async getWeather() {
        let data = await fetchWeatherFromApi('48842');
        console.log( data );
    }

    render() 
    {
        return(
            <button onClick={this.getWeather}>GetWeather</button>
        )
    }
}

export default WeatherContainer;