import React from 'react';
import { fetchWeatherFromApi } from './../api/weather'

type State = {
    weather: number;
}

type Props = {
}

class WeatherContainer extends React.PureComponent<Props, State> {
    state: State = {
        weather: 0
    }

    getWeather = async ()  => {
        let data = await fetchWeatherFromApi('48842');
        this.setState( { weather: data.main.temp } );
        console.log( data );
    }

    render() 
    {
        return(
            <div>
                <div>
                    <span>Weather data</span>
                    <span>{this.state.weather}</span>
                </div>
                <button onClick={this.getWeather}>GetWeather</button>
            </div>
        )
    }
}

export default WeatherContainer;