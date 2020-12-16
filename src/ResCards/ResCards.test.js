import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from './ResCards.js'

describe('Card', () => {
  it('should render the reservation card correctly', () => {
    render(<Card
      name= 'Tarrant Hawkins'
      date='2/29'
      time= '2:29' 
      number= '21'
    />)

    const name = screen.getByText('Tarrant Hawkins')
    const time = screen.getByText('2:29 pm')

    expect(name).toBeInTheDocument()
    expect(time).toBeInTheDocument()
  })
})