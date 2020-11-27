import React, { useEffect, useState } from "react";
import Axios from "axios";
import './Economy.css'
import CardList from "../../components/CardList/CardList";
import Loading from '../../components/Loading/Loading'

function Economy() {
  const [economyNews, setEconomyNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEconomy = async () => {
    let response = await Axios.get(
      "https://api.collectapi.com/news/getNews?country=tr&tag=economy",
      {
        headers: {
          authorization: "apikey 1tXM1SAj9gY3CPdefaJBr9:6Rtwu85yimuMahXgLDhWSg",
        },
      }
    );
    console.log(response.data.result);
    setEconomyNews(response.data.result);
    setLoading(false)

  };

  useEffect(() => {
    fetchEconomy();
  }, []);

  return (
    <div>
      {economyNews.length > 0  ? <CardList data={economyNews}/> : <div className="loadingContent"><Loading loading={loading}/></div>}
    </div>
  );
}

export default Economy;
