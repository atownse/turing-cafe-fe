import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations.js'
import Form from '../Form/Form.js'
import { getReservations } from '../apiCalls'

class App extends Component {
  constructor(props) {
    super(props)
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

  addReservation = (resy) => {
    this.setState({reservations: [...this.state.reservations, resy] })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={ this.addReservation } />
        </div>
        <div className='resy-container'>
          <Reservations reservations={ this.state.reservations } />
        </div>
      </div>
    )
  }
}

export default App;
