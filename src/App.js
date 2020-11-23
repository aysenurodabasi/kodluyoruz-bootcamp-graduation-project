import Axios from 'axios';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import React,{useState,useEffect} from 'react';

function App() {

  const fetchData = async() => {
    let response = await Axios.get('https://api.collectapi.com/news/getNews?country=tr&tag=general', {
      headers: {
        authorization: 'apikey 1tXM1SAj9gY3CPdefaJBr9:6Rtwu85yimuMahXgLDhWSg'
      }
    });
    console.log(response.data)
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className="App">
      <Navbar/>
      dgdfg
      <Footer/>
    </div>
  );
}

export default App;
