import React,{useEffect,useState} from 'react'
import Axios from "axios";

function Economy() {
  const [economyNews , setEconomyNews ] = useState([]);

  const fetchEconomy = async() =>{
    let response = await Axios.get(
      "https://api.collectapi.com/news/getNews?country=tr&tag=economy",
      {
        headers: {
          authorization: "apikey 1tXM1SAj9gY3CPdefaJBr9:6Rtwu85yimuMahXgLDhWSg",
        },
      }
    );
    console.log(response.data.result)
    setEconomyNews(response.data.result)
  }

  useEffect(() => {
    fetchEconomy();
  }, [])

  return (
    <div>
       {
       economyNews.length>0 && economyNews.map((item,i)=>(
        <div>
          <p>{item.description}</p>
          <p>{item.title}</p>
        </div>
        
       ))
    }
    sdfsdf
    </div>
   
  )
}

export default Economy
