import { WEATHER_API_KEY } from './../ApiKeys';

export async function fetchWeatherFromApi( zipCode: string ) {
    const weatherURL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&APPID=${WEATHER_API_KEY}`

    let response = await fetch( weatherURL );

    if ( response.ok ) {
        let data = await response.json();
        return data;
    }
    else {
        return {};
    }
}