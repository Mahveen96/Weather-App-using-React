import React from 'react'
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa'

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="form">
        <input
          type="text"
          placeholder="Enter your city name..."
          className="form-input"
          onChange={props.onChange}
        />
        <button className="search-btn" onClick={props.onClick}>
          <FaSearch size={25} />
        </button>
      </div>
      <div className="sidebar-content">
        <img src={props.icon} alt="" className="sidebar-img" />
        <h1>{Math.round(props.celsius)}°C</h1>
        <h2> {props.text}</h2>
        <div className="date">{props.date}</div>
        {/*  using an immediately invoked function expression (IIFE) to extract the hours and minutes from the time string */}
        <div className="time">
          {(() => {
            const [hours, minutes] = props.time.slice(11).split(':')
            // now the output is in array.. for an instance [01, 10]
            const meridian = parseInt(hours, 10) >= 12 ? 'PM' : 'AM'
            const hour = parseInt(hours, 10) % 12 || 12
            return `${hour}:${minutes} ${meridian}`
          })()}
        </div>
        <div className="location">
          <FaMapMarkerAlt size={15} />
          <p>
            {props.name}, {props.region}, {props.country}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
