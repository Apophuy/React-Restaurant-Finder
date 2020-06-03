import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { ratingsColor } from "../../utils/ratingsColor";

const photo = require("../../assets/no-image-found.png");

class RestaurantCard extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="media-left">
          <Link to={`/restaurant/${this.props.restaurant.id}`}>
            <img
              src={this.props.restaurant.thumb || photo}
              alt="thumb"
              className="media-left__image"
            />
          </Link>
        </div>
        <div className="media-body">
          <Link to={`/restaurant/${this.props.restaurant.id}`}>
            <h3 className="restaurant-name res_name">
              {this.props.restaurant.name}
            </h3>{" "}
          </Link>

          <div>
            <span
              className={ratingsColor(
                this.props.restaurant.user_rating["aggregate_rating"]
              )}
            >
              {this.props.restaurant.user_rating["aggregate_rating"]}
            </span>
            <span> ({this.props.restaurant.user_rating["votes"]} votes)</span>
            <span className="res_review">
              | &nbsp;&nbsp; 
            </span>
            <span> {this.props.restaurant.average_cost_for_two}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantCard;
