import React, { useState } from 'react'
import { getByRole, getByText, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from './Contact'
import Button from '../../components/Button/Button'


describe('alert', () => {
    test('render Contact', ()=>{
        const {container} = render(<Contact/>)
    })
  })