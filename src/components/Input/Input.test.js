import React, { useState } from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from './Input'

const SimpleInput = () => {
    return(<Input type="text" value="testValue" onChange={()=>{}}/>)
}

describe('input', () => {
    test('render input tag', () => {
        const mockFn = jest.fn();
        const {getByDisplayValue}=render(<SimpleInput />)

        const input = getByDisplayValue('testValue');
        expect(input.tagName).toBe('INPUT');
    })
  })