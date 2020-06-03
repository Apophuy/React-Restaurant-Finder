import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import { ratingsColor } from '../../utils/ratingsColor';

const photo = require('../../assets/no-image-found.png');

class RestaurantCard extends Component {
  render() {
    return (
      <div className={styles['card-container']}>
        <div className={styles['media-left']}>
          <Link to={`/restaurant/${this.props.restaurant.id}`}>
            <img
              src={this.props.restaurant.thumb || photo}
              alt='thumb'
              className={styles['media-left__image']}
            />
          </Link>
        </div>
        <div className={styles['media-body']}>
          <Link to={`/restaurant/${this.props.restaurant.id}`}>
            <h3 className={styles['res_name']}>{this.props.restaurant.name}</h3>{' '}
          </Link>

          <div>
            <span className={ratingsColor(this.props.restaurant.user_rating['aggregate_rating'])}>
              {this.props.restaurant.user_rating['aggregate_rating']}
            </span>
            <span> ({this.props.restaurant.user_rating['votes']} votes)</span>
            <span className={styles['res_review']}>| &nbsp;&nbsp;</span>
            <span> {this.props.restaurant.average_cost_for_two}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantCard;
