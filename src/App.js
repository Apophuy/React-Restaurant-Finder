import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import FavouritesPage from "./pages/Favourites/FavouritesPage";
import RestaurantPage from "./pages/DetailPage/RestaurantPage"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/favourites" component={FavouritesPage} />
            <Route path='/restaurant/:id' component={RestaurantPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
