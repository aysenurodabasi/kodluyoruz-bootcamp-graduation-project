import React, { useState } from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/react'
import Card from './Card'


const SimpleData = () => {
  const [news, setNews] = useState({
    description: "Savunma Sanayii İcra ",
    image: "https://i4.hurimg.com/i/hurriyet/75/620x350/5fc7a9fb7152d81778a85674.jpg",
    key: "0",
    name: "Son dakika... Kritik toplantı sonrası İletişim Başkanlığı'ndan açıklama",
    source: "Hürriyet Ekonomi",
    url: "https://www.hurriyet.com.tr/ekonomi/son-dakika-kritik-toplanti-sonrasi-iletisim-baskanligindan-aciklama-41678167"
  },
  )
  return(<Card data={news} />)
}

describe('Card', () => {
  test('test card comp', () => {
    const {container}=render(<SimpleData/>)

    const imageDiv = container.querySelector('img');
    //const informationDiv=container.getElementsByClassName('container')
    expect(imageDiv.src).toBe("https://i4.hurimg.com/i/hurriyet/75/620x350/5fc7a9fb7152d81778a85674.jpg")
    
    //expect(informationDiv).toBe({
     // description: "Savunma Sanayii İcra ",
     // image: "https://i4.hurimg.com/i/hurriyet/75/620x350/5fc7a9fb7152d81778a85674.jpg",
     // key: "0",
     // name: "Son dakika... Kritik toplantı sonrası İletişim Başkanlığı'ndan açıklama",
     // source: "Hürriyet Ekonomi",
      //url: "https://www.hurriyet.com.tr/ekonomi/son-dakika-kritik-toplanti-sonrasi-iletisim-baskanligindan-aciklama-41678167"
   // })
  })

})