import React from 'react'

const LocationCards = (props) => {
  return (
    <div className='flex'>
      <div className="image">
        <img src={props.src} alt={`${props.title} image`} className='w-full h-full object-cover'/>
      </div>

      <div className="cardIems">
        <div className="loccation flex items-center gap-3">
          <img src={props.locationIcon} alt="location icon" className=''/>
          <p className='text-xs -tracking-[-.25rem] uppercase'>{props.location}</p>
          <p><a href="#" className='underline'>View on Google Maps</a></p>
        </div>

        <h3>{props.title}</h3>

        <p>{`${props.startDate} - ${props.endDate}`}</p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default LocationCards