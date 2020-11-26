import React, { useEffect, useState } from "react";
import Axios from "axios";
import CardList from "../../components/CardList/CardList";

function Economy() {
  const [economyNews, setEconomyNews] = useState([]);

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
  };

  useEffect(() => {
    fetchEconomy();
  }, []);

  return (
    <div>
      {economyNews.length > 0  ? <CardList data={economyNews}/> : <p>loading...</p>}
    </div>
  );
}

export default Economy;
