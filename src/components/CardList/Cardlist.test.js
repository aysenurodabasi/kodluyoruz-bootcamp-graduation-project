// import React, { useState } from 'react'
// import { render } from '@testing-library/react'
// import userEvent from '@testing-library/react'
// import CardList from './CardList'

// const SimpleCardlist = () => {
//     const [data, setData] = useState({
//         description: "Savunma Sanayii",
//         image: "https://i4.hurimg.com/i/hurriyet/75/620x350/5fc7a9fb7152d81778a85674.jpg",
//         key: "0",
//         name: "Son dakika... Kritik toplantı sonrası İletişim Başkanlığı'ndan açıklama",
//         source: "Hürriyet Ekonomi",
//         url: "https://www.hurriyet.com.tr/ekonomi/son-dakika-kritik-toplanti-sonrasi-iletisim-baskanligindan-aciklama-41678167"
//       },{
//         description: "Savunma Sanayii",
//         image: "https://i4.hurimg.com/i/hurriyet/75/620x350/5fc7a9fb7152d81778a85674.jpg",
//         key: "0",
//         name: "Son dakika... Kritik toplantı sonrası İletişim Başkanlığı'ndan açıklama",
//         source: "Hürriyet Ekonomi",
//         url: "https://www.hurriyet.com.tr/ekonomi/son-dakika-kritik-toplanti-sonrasi-iletisim-baskanligindan-aciklama-41678167"
//       })
//     return(<CardList data={data} />)
// }

// describe('cardlist', () => {
//     test('test cardlist comp', () => {
//         const {container}=render(<SimpleCardlist/>)

//         const content = container.querySelector('div');
//         expect(content).toHaveTextContent({
//             description: "Savunma Sanayii",
//             image: "https://i4.hurimg.com/i/hurriyet/75/620x350/5fc7a9fb7152d81778a85674.jpg",
//             key: "0",
//             name: "Son dakika... Kritik toplantı sonrası İletişim Başkanlığı'ndan açıklama",
//             source: "Hürriyet Ekonomi",
//             url: "https://www.hurriyet.com.tr/ekonomi/son-dakika-kritik-toplanti-sonrasi-iletisim-baskanligindan-aciklama-41678167"
//           })
//     }) 
//   })