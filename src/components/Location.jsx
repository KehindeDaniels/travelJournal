import React from 'react'
import LocationCards from './LocationCards'
import data from './data'

const Location = () => {
  const card = data.map((cards, index)=>(
    <LocationCards
      key={index}
      {...cards}
    />
  ))
  return (
    <>
      {card}
    </>
  )
}

export default Location