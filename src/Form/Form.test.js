import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from './Form.js'

describe('Form', () => {
  it('should make a new reservation with addReservation ', () => {
    const mockAddResy = jest.fn()
    Date.now = jest.fn().mockImplementation(() => 11111111111111)

    render( <Form addReservation={ mockAddResy } />)

    fireEvent.change(screen.getByPlaceholderText('name'), {target: {value: 'Tarrant Hawkins'}})
    fireEvent.change(screen.getByPlaceholderText('date'), {target: {value: '12/31'}})
    fireEvent.change(screen.getByPlaceholderText('time'), {target: {value: '4:20'}})
    fireEvent.change(screen.getByPlaceholderText('number'), {target: {value: '29'}})
    fireEvent.click(screen.getByText('Add Reservation'))

    expect(mockAddResy).toHaveBeenCalledWith({id: 11111111111111, name: 'Tarrant Hawkins', date: '12/31' , time: '4:20' , number: '29'})
  })
})