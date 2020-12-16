import React, { Component } from 'react'
import Card from '../ResCards/ResCards.js'
import './Reservations.css'
import { getReservations } from '../apiCalls'

class Reservations extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      errMsg: null
    }
  }

  componentDidMount() {
    getReservations()
      .then(reservations => this.setState({ reservations }))
      .catch(err => this.setState({ errMsg: err.message } ))
  }

  render() {
    let reservations = this.state.reservations.map(reservation => {
      return (
        <Card
          name={ reservation.name }
          date={ reservation.date }
          time={ reservation.time }
          number={ reservation.number }
          key={ reservation.id }
        />
      )
    })
    return (
      <section>{ reservations }</section>
    )
  }
}

export default Reservations