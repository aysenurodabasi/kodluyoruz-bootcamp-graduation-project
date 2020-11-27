import React, { useState, useEffect } from "react";
import Axios from "axios";
import CardList from "../../components/CardList/CardList";
import Loading from '../../components/Loading/Loading'

function Sport() {
  const [sport, setSport] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSport = async () => {
    let response = await Axios.get(
      "https://api.collectapi.com/news/getNews?country=tr&tag=sport",
      {
        headers: {
          authorization: "apikey 1tXM1SAj9gY3CPdefaJBr9:6Rtwu85yimuMahXgLDhWSg",
        },
      }
    );
    console.log(response.data.result);
    setSport(response.data.result);
  };

  useEffect(() => {
    fetchSport();
  }, []);

  return (
    <div>
      {sport.length > 0 ? (
        <CardList data={sport} />
      ) : (
        <div className="loadingContent">
          <Loading loading={loading} />
        </div>
      )}
    </div>
  );
}

export default Sport;
