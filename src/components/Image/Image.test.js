import React, { useState } from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/react'
import Image from './Image'

const SimpleImage = () => {
    const [data, setData] = useState("https://i4.hurimg.com/i/hurriyet/75/620x350/5fc7a9fb7152d81778a85674.jpg")
    return(<Image data={data} />)
}

describe('images', () => {
    test('test image comp', () => {
        const {container}=render(<SimpleImage/>)

        const images = container.querySelector('img');
        expect(images.src).toBe("https://i4.hurimg.com/i/hurriyet/75/620x350/5fc7a9fb7152d81778a85674.jpg")
    }) 
  })