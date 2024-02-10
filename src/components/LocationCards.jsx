import React from 'react'

const LocationCards = (props) => {
  return (
    <div>
      <div className="image">
        <img src={props.src} alt={`${props.title} image`} />
      </div>

      <div className="cardIems">
        <div className="loccation-title">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default LocationCards