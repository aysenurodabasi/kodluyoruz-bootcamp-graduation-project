import React,{useEffect,useState} from 'react'
import Axios from "axios";
import CardList from "../../components/CardList/CardList"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Loading from '../../components/Loading/Loading'

function Home() {
  const [general, setGeneral] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setLoading(false)
  } 

  useEffect(()=>{
    fetchGeneral()
  },[])
  

  return (
    <div className="content">
      <Navbar/>
        {general.length > 0 ? <CardList data={general} /> : <div className="loadingContent"><Loading loading={loading}/></div>}
      <Footer/>
    </div>
  )
}

export default Home
