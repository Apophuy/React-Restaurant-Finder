import React, { Component } from 'react'; 
import {Link} from 'react-router-dom';
import "./index.css";

class Navbar extends Component {
    render() {
        return (
            <div className="container">
              <nav>
                <ul>
                  <li><a href="#">Home</a> </li>
                  <li><a href="#">Favourites</a> </li>
                </ul>
              </nav>
            </div>
        );
    }
}

export default Navbar; 