import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import WeatherIcon from 'react-icons-weather';
import '../App.css';

var temp = {
    "coord": {
        "lon": 80.28,
        "lat": 13.09
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 304.97,
        "feels_like": 306.53,
        "temp_min": 303.71,
        "temp_max": 306.15,
        "pressure": 1010,
        "humidity": 59
    },
    "visibility": 6000,
    "wind": {
        "speed": 5.1,
        "deg": 100
    },
    "clouds": {
        "all": 40
    },
    "dt": 1584269337,
    "sys": {
        "type": 1,
        "id": 9218,
        "country": "IN",
        "sunrise": 1584233178,
        "sunset": 1584276560
    },
    "timezone": 19800,
    "id": 1264527,
    "name": "Chennai",
    "cod": 200
}

function Weather(props) {
    const { responseData: { name, weather, main, sys,coord,wind,clouds,visibility }, degress } = props
    return (
            <div className="blockStyle"> 
                <div className="cardBlock">
                    <Card className="flex">
                        <CardContent>
                            <div className="centerAlign">
                                <WeatherIcon name="owm" iconId={weather[0].id.toString()} flip="horizontal" rotate="90" />
                                <span className="boldFont subHeading">{`${name},${sys["country"]} Temparature`}</span>
                            </div>
                            <div className="boldFont marginAlign">{weather[0].description}</div>
                            <div className="weatherRightBlock">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Temparature in Kelvin</td>
                                            <td>{`${main['temp']}k`}</td>
                                        </tr>
                                        <tr>
                                            <td >Temparature in Degres</td>
                                            <td>{`${Math.ceil(main['temp'] - degress)}℃`}</td>
                                        </tr>
                                        <tr>
                                            <td >Temparature in Fahrenheit</td>
                                            <td>{`${(parseInt(main['temp'] - degress) * 1.8) + 32}℉`}</td>
                                        </tr>
                                        <tr>
                                            <td > Max Temparature</td>
                                            <td>{`${main['temp_max']}k`}</td>
                                        </tr>
                                        <tr>
                                            <td > Max Temparature</td>
                                            <td>{`${main['temp_min']}k`}</td>
                                        </tr>
                                        <tr>
                                            <td > Max Temparature</td>
                                            <td>{`${main['temp_min']}k`}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="cardColor flex">
                        <CardContent className="contentColor">
                            <div className="centerAlign">
                                <span className="boldFont subHeading">{`${name},${sys["country"]} Additional Info`}</span>
                            </div>
                            <div className="boldFont marginAlign">{`RealFeel®${main['feels_like']}`}</div>
                            <div className="weatherRightBlock">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Latitude</td>
                                            <td>{`${coord["lat"]}°`}</td>
                                        </tr>
                                        <tr>
                                            <td >Longitude</td>
                                            <td>{`${coord["lon"]}°`}</td>
                                        </tr>
                                        <tr>
                                            <td >Wind Speed</td>
                                            <td>{`${wind["speed"]}meter/sec`}</td>
                                        </tr>
                                        <tr>
                                            <td >Humidity</td>
                                            <td>{`${main["humidity"]}%`}</td>
                                        </tr>
                                        <tr>
                                            <td >Pressure</td>
                                            <td>{`${main['pressure']}hpa`}</td>
                                        </tr>
                                        <tr>
                                            <td >Cloudiness</td>
                                            <td>{`${clouds['all']}%`}</td>
                                        </tr>
                                        <tr>
                                            <td >Visibility</td>
                                            <td>{`${visibility}`}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
    );
}

export default Weather;