import React from 'react'
import './ResCards.css'

const Card = (props) => {
  return(
    <section className="res-card">
      <h3>{ props.name }</h3>
      <p>{ props.date }</p>
      <p>{ props.time } pm</p>
      <p>Number of Guests: { props.number }</p>
      <button>Cancel</button>
    </section>
  )
}

export default Card