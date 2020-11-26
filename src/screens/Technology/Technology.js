import React,{useEffect,useState} from 'react'
import Axios from "axios";
import CardList from "../../components/CardList/CardList"

function Technology() {
  const [technology, setTechnology] = useState([]);

  const fetchTechnology = async() => {
    let response = await Axios.get(
      "https://api.collectapi.com/news/getNews?country=tr&tag=technology",
      {
        headers: {
          authorization: "apikey 1tXM1SAj9gY3CPdefaJBr9:6Rtwu85yimuMahXgLDhWSg",
        },
      }
    );
      console.log(response.data.result)
      setTechnology(response.data.result)
  } 

  useEffect(()=>{
    fetchTechnology()
  },[])
  
  return (
    <div>
      {technology.length > 0 ? <CardList data={technology} /> : <p>loading...</p>}
    </div>
  )
}

export default Technology
