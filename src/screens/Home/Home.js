import React,{useEffect,useState} from 'react'
import Axios from "axios";
import CardList from "../../components/CardList/CardList"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'


function Home() {
  const [general, setGeneral] = useState([]);

  const fetchGeneral = async() => {
    let response = await Axios.get(
      "https://api.collectapi.com/news/getNews?country=tr&tag=general",
      {
        headers: {
          authorization: "apikey 1tXM1SAj9gY3CPdefaJBr9:6Rtwu85yimuMahXgLDhWSg",
        },
      }
    );
      console.log(response.data.result)
      setGeneral(response.data.result)
  } 

  useEffect(()=>{
    fetchGeneral()
  },[])
  

  return (
    <div className="content">
      <Navbar/>
        {general.length > 0 ? <CardList data={general} /> : <p>loading...</p>}
      <Footer/>
    </div>
  )
}

export default Home
