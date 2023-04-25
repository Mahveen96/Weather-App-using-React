import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Weather from './Weather'

const Home = () => {
  const date = new Date().toUTCString().slice(0, 16)
  // Setting up default weather data
  const [weatherData, setWeatherData] = useState({
    celsius: 10,
    name: 'los angeles',
    region: 'california',
    country: 'USA',
    wind: 12,
    pressure: 1222,
    humidity: 20,
    visibility: 6,
    cloud: 30,
    uv: 2,
    direction: 'WSW',
    icon: 'src/assets/cloud.png',
    text: 'Partly Cloudy',
    time: '01:09 AM',
  })

  const [location, setLocation] = useState('')

  // Using fetch method to call API
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e2a1dfcd1amsh197893fafcc658dp10c916jsn2e4dc24849b1',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  }

  // fetching weather data
  const handleClick = () => {
    if (location !== '') {
      fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`,
        options
      )
        .then((response) => response.json())
        .then((data) =>
          setWeatherData({
            ...weatherData,
            name: data.location.name,
            region: data.location.region,
            country: data.location.country,
            celsius: data.current.temp_c,
            wind: data.current.wind_mph,
            pressure: data.current.pressure_mb,
            humidity: data.current.humidity,
            visibility: data.current.vis_km,
            cloud: data.current.cloud,
            uv: data.current.uv,
            direction: data.current.wind_dir,
            text: data.current.condition.text,
            icon: data.current.condition.icon,
            time: data.location.localtime,
          })
        )
        .catch((err) => console.error(err))
    }
  }

  const handleChange = (e) => {
    setLocation(e.target.value)
  }

  return (
    <main>
      <div className="container">
        <Sidebar
          celsius={weatherData.celsius}
          name={weatherData.name}
          region={weatherData.region}
          country={weatherData.country}
          onChange={handleChange}
          onClick={handleClick}
          text={weatherData.text}
          icon={weatherData.icon}
          date={date}
          time={weatherData.time}
        />
        <Weather
          wind={weatherData.wind}
          pressure={weatherData.pressure}
          humidity={weatherData.humidity}
          visibility={weatherData.visibility}
          cloud={weatherData.cloud}
          uv={weatherData.uv}
          direction={weatherData.direction}
        />
      </div>
    </main>
  )
}

export default Home
