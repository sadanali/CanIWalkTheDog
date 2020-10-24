import React from 'react';

class WeatherContainer extends React.Component {
    getWeather = () => {
        alert('Get Weather!')
    }

    render() 
    {
        return(
            <button onClick={this.getWeather}>GetWeather</button>
        )
    }
}

export default WeatherContainer;