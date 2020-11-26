import React,{useState,useEffect} from 'react'
import Axios from "axios";
import CardList from "../../components/CardList/CardList"

function Magazine() {
  const [magazine, setMagazine] = useState([]);

  const fetchMagazine = async() => {
    let response = await Axios.get(
      "https://api.collectapi.com/news/getNews?country=tr&tag=magazine",
      {
        headers: {
          authorization: "apikey 1tXM1SAj9gY3CPdefaJBr9:6Rtwu85yimuMahXgLDhWSg",
        },
      }
    );
      console.log(response.data.result)
      setMagazine(response.data.result)
  } 

  useEffect(()=>{
    fetchMagazine()
  },[])
  
  return (
    <div>
      {magazine.length > 0 ? <CardList data={magazine} /> : <p>loading...</p>}
    </div>
  )
}

export default Magazine
