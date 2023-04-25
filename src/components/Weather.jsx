import React from 'react'
import wind from '../assets/wind.png'
import air from '../assets/windy.png'
import humidity from '../assets/humidity.png'
import visibility from '../assets/visibility.png'
import cloud from '../assets/cloud.png'
import uv from '../assets/uv.png'
import direction from '../assets/direction.png'

const Weather = (props) => {
  return (
    <div className="weather">
      <div className="highlight">
        <h1> Today's Highlights</h1>
        <section className="highlight-content">
          <article className="highlight-info">
            <h2>Wind Status</h2>
            <img src={wind} alt="wind" />
            <p>{props.wind} mph</p>
          </article>
          <article className="highlight-info">
            <h2>Air Pressure</h2>
            <img src={air} alt="air" />
            <p>{props.pressure} mb</p>
          </article>
          <article className="highlight-info">
            <h2>Humidity</h2>
            <img src={humidity} alt="humidity" />
            <p>{props.humidity}%</p>
          </article>
          <article className="highlight-info">
            <h2>Visibility</h2>
            <img src={visibility} alt="visibility" />
            <p>{props.visibility} Km</p>
          </article>
          <article className="highlight-info">
            <h2>Cloud</h2>
            <img src={cloud} alt="cloud" />
            <p>{props.cloud}%</p>
          </article>
          <article className="highlight-info">
            <h2>UV</h2>
            <img src={uv} alt="uv" />
            <p>{props.uv} UV index</p>
          </article>
          <article className="highlight-info">
            <h2>Wind Direction</h2>
            <img src={direction} alt="direction" />
            <p>{props.direction}</p>
          </article>
        </section>
      </div>
    </div>
  )
}

export default Weather
