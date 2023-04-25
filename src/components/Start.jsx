import React from 'react'
import { useNavigate } from 'react-router-dom'
import weather from '../assets/weather.png'

const Start = () => {
  const navigate = useNavigate()
  const routeChange = () => {
    let path = 'home'
    navigate(path)
  }
  return (
    <>
      <div className="container">
        <section className="start">
          <img src={weather} alt="weather" />
          <h1>Discover the weather in your city</h1>
          <p> Get to know your weather maps and radar precipitation forecast</p>
          <button className="start-btn" onClick={routeChange}>
            Get Started
          </button>
        </section>
      </div>
    </>
  )
}

export default Start
