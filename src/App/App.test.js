import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from './App';

describe('App', () => {
  it('should render with correct info', () => {
    render (
      <App />
    )
    const header = screen.getByText('Turing Cafe Reservations')
    expect(header).toBeInTheDocument()
  });

  it('should be able to add a new reservation', () => {
    render (
      <App />
    )

    const name = screen.getByPlaceholderText('name')
    const date = screen.getByPlaceholderText('date')
    const time = screen.getByPlaceholderText('time')
    const number = screen.getByPlaceholderText('number')
    const button = screen.getByText('Add Reservation')

    userEvent.type(name, 'Jason Bourne')
    userEvent.type(date, '11/11')
    userEvent.type(time, '12:12')
    userEvent.type(number, '437')
    userEvent.click(button)

    expect(screen.getByText('Jason Bourne')).toBeInTheDocument()
    expect(screen.getByText('11/11')).toBeInTheDocument()
    expect(screen.getByText('12:12 pm')).toBeInTheDocument()
    expect(screen.getByText('Number of Guests: 437')).toBeInTheDocument()
  })
})
