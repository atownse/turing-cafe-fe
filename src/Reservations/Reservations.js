import React from 'react'
import Card from '../ResCards/ResCards.js'
import './Reservations.css'

const Reservations = (props) => {
  const allReservations = props.reservations.map(resy => {
    return (
      <Card
        name={ resy.name }
        date={ resy.date }
        time={ resy.time }
        number={ resy.number }
        key={ resy.id }
      />
    )
  })

  return (
    <section>{ allReservations }</section>
  )
}

export default Reservations