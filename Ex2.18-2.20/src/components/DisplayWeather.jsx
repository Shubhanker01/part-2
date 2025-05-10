import React, { useEffect, useState } from 'react'
import axios from 'axios'


function DisplayWeather({ capital }) {
    let [temp, setTemp] = useState(0)
    let [windSpeed, setWindSpeed] = useState(0)

    useEffect(() => {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${capital}&aqi=no`).then((res) => {
            console.log(res.data)
            setTemp(res.data.current.temp_c)
            setWindSpeed(res.data.current.wind_kph)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <>
            <div>
                <h1>Weather in {capital}</h1>
                <p>Temperature {temp}</p>
                <p>Wind {windSpeed}</p>
            </div>
        </>
    )
}

export default DisplayWeather