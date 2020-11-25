import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

import Home from "./screens/Home/Home";
import Economy from "./screens/Economy/Economy";
import Sport from "./screens/Sport/Sport";
import Magazine from "./screens/Magazine/Magazine";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const fetchData = async () => {
    let response = await Axios.get(
      "https://api.collectapi.com/news/getNews?country=tr&tag=general",
      {
        headers: {
          authorization: "apikey 1tXM1SAj9gY3CPdefaJBr9:6Rtwu85yimuMahXgLDhWSg",
        },
      }
    );
    console.log(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <Router>
        <div>
          {/* <ul>
            <li>
              <Link exact to="/">
                <Home />
              </Link>
            </li>
            <li>
              <Link to="/economy">Ekonomi</Link>
            </li>
          </ul> */}

      
          <Switch>
            <Route exact path="/" component={Home}/>
            {/* <Route path="/news" component={News}/> */}
            {/* <Route path="/general" component={General}/> */}
            <Route path="/economy" component={Economy}/>
            <Route path="/sport" component={Sport}/>
            <Route path="/technology" component={Sport}/>
            <Route path="/magazine" component={Magazine}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
