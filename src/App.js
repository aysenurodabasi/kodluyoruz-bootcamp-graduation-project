import React, { useState, useEffect } from "react";
import "./App.css";

import Home from "./screens/Home/Home";
import Economy from "./screens/Economy/Economy";
import Sport from "./screens/Sport/Sport";
import Magazine from "./screens/Magazine/Magazine";
import Contact from "./screens/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Technology from "./screens/Technology/Technology";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/economy" component={Economy} />
            <Route path="/sport" component={Sport} />
            <Route path="/technology" component={Technology} />
            <Route path="/magazine" component={Magazine} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
