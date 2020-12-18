import React, { useState } from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/react'
import Information from './Information'

const FakeInfo = () => {
    const [info, setInfo] = useState({
        description: "Savunma Sanayii",
        image: "https://i4.hurimg.com/i/hurriyet/75/620x350/5fc7a9fb7152d81778a85674.jpg",
        key: "0",
        name: "Son dakika... Kritik toplantı sonrası İletişim Başkanlığı'ndan açıklama",
        source: "Hürriyet Ekonomi",
        url: "https://www.hurriyet.com.tr/ekonomi/son-dakika-kritik-toplanti-sonrasi-iletisim-baskanligindan-aciklama-41678167"
      })
    return(<Information information={info} />)
}

describe('info', () => {
    test('test info comp', () => {
        const {container}=render(<FakeInfo/>)

        const link = container.querySelector('a');
        const infoName = container.querySelector('h5');
        const source = container.querySelector('p');
        const description = container.querySelector('h3');
        expect(link.href).toBe("https://www.hurriyet.com.tr/ekonomi/son-dakika-kritik-toplanti-sonrasi-iletisim-baskanligindan-aciklama-41678167")
        expect(source).toHaveTextContent("Hürriyet Ekonomi")
        expect(infoName).toHaveTextContent("Son dakika... Kritik toplantı sonrası İletişim Başkanlığı'ndan açıklama")
        expect(description).toHaveTextContent("Savunma Sanayii")


    }) 
  })