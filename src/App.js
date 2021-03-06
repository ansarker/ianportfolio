import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./dist/styles/styles.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ background: "#f1f1f1" }}>
          <Header />
          <div className="container">
            {/* <Route path="/iansarker" exact component={Home} /> */}
            <Route path="/ianportfolio" component={Portfolio} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
