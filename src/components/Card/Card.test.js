import React from 'react'
import {render} from '@testing-library/react'
import Card from './Card'

describe('Card', ()=>{
  const data = [
    {
      description:"Savunma Sanayii İcra ",
      image: "https://i4.hurimg.com/i/hurriyet/75/620x350/5fc7a9fb7152d81778a85674.jpg",
      key: "0",
      name: "Son dakika... Kritik toplantı sonrası İletişim Başkanlığı'ndan açıklama",
      source: "Hürriyet Ekonomi",
      url: "https://www.hurriyet.com.tr/ekonomi/son-dakika-kritik-toplanti-sonrasi-iletisim-baskanligindan-aciklama-41678167"
    },
  ]
  test('check renders comp', ()=>{
    render(<Card data={data}/>)
  })
  test('test card ', ()=>{
    const display = render(<Card data={data}/>)
    // expect(getByTestId('cardId')).toHaveTextContent([{key:"15", description:"sdsad"}])
    display.getByText(/data/)
  })
})