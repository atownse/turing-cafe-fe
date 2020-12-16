import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }    
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitReservation = (event) => {
    event.preventDefault()
    const { addReservation } = this.props
    const newReservation = { ...this.state, id: Date.now() }
    addReservation( newReservation )
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

  render() {
    return (
      <form>
        <input type='text' placeholder='name' value={ this.state.name } name='name' onChange={ this.handleInput } />
        <input type='text' placeholder='date' value={ this.state.date } name='date' onChange={ this.handleInput } />
        <input type='text' placeholder='time' value={ this.state.time } name='time' onChange={ this.handleInput } />
        <input type='text' placeholder='number' value={ this.state.number } name='number' onChange={ this.handleInput } />
        <button onClick={ this.submitReservation }>Add Reservation</button>
      </form>
    )
  }
}

export default Form