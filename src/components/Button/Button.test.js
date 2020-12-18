import React, { useState } from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('button', () => {
    test('test button onclick', () => {
        const mockFn = jest.fn();
        const {getByRole}=render(<Button onClick={mockFn}/>)

        const button = getByRole('button');
        userEvent.click(button);
        expect(mockFn).toHaveBeenCalledTimes(1);
    }) 

    // test('test form message', async()=>{
    //     const {container}=render(<Button/>)
    //     const alertDiv = await container.findByRole('alert')
    //     expect(alertDiv).toHaveTextContent('alınmıştır')

        
    // })
  })