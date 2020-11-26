import React, { useState, useEffect } from "react";
import "./App.css";

import Home from "./screens/Home/Home";
import Economy from "./screens/Economy/Economy";
import Sport from "./screens/Sport/Sport";
import Magazine from "./screens/Magazine/Magazine";
import Cities from "./screens/Cities/Cities";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Technology from "./screens/Technology/Technology";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="content">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/economy" component={Economy} />
            <Route path="/sport" component={Sport} />
            <Route path="/technology" component={Technology} />
            <Route path="/magazine" component={Magazine} />
            <Route path="/cities" component={Cities} />
          </Switch>
          <Footer />

          
        </div>
      </Router>
    </div>
  );
}

export default App;
