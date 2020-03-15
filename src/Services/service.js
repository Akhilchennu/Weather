export const service={
    getWeatherData 
   }

function getWeatherData(weatherData){
    return fetch('http://localhost:3002/getWeatherUpdates',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
                weatherData: weatherData
            })
    }).then(response => response.json())
}
