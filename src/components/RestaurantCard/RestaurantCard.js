import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import { ratingsColor } from '../../utils/ratingsColor';
import pathIcon from '../../assets/images/path.svg';
import foodIcon from '../../assets/images/food.svg';
import hornIcon from '../../assets/images/horn.png';
import locationIcon from '../../assets/images/location-pin.svg';
import ratingLabel from '../../assets/images/rating-label.svg';
import restaurantBuilding from '../../assets/images/restaurant-building.svg';
import starIcon from '../../assets/images/star.svg';

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
          <div className={styles['res-info']}>
            <Link to={`/restaurant/${this.props.restaurant.id}`}>
              <div className={styles['info-container']}>
                <img className={styles.icon} src={restaurantBuilding} alt='Restaurant' />
                <h3 className={styles['res_name']}>{this.props.restaurant.name}</h3>{' '}
              </div>
            </Link>
            <div className={styles['info-container']}>
              <img className={styles.icon} src={locationIcon} alt='Location icon' />
              <p className={styles['res-info__text']}>Some City</p>
            </div>
            <p className={styles['res-info__text']}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, dolor?
            </p>
            <p className={styles.address}>Lorem ipsum dolor sit amet consectetur.</p>
            <img className={styles.icon} src={pathIcon} alt='pathIcon' />
            <p className={styles['average-title']}>Average Cost for two</p>
            <p className={styles['average-info']}>{this.props.restaurant.average_cost_for_two}</p>
          </div>
          <div className={styles['res-info']}>
            <span className={styles['res-info__right-title']}>Review</span>
            <div className={styles['info-container']}>
              <p className={styles['res-info__text']}>Aggregate rating</p>
              <img className={styles.icon} src={starIcon} alt='Star icon' />
              <div className={styles['rating-wrapper']}>
                <span className={styles['res_rating']}>
                  {this.props.restaurant.user_rating['aggregate_rating']}
                </span>
              </div>
              <span> ({this.props.restaurant.user_rating['votes']} votes)</span>
            </div>
            <div className={styles['info-container']}>
              <p className={styles['res-info__text']}>Rating Color&nbsp;</p>
              <img className={styles.icon} src={ratingLabel} alt='Label icon' />
            </div>
            <div className={styles['info-container']}>
              <img className={styles.icon} src={foodIcon} alt='Food icon' />
              <span className={styles['res-info__right-title']}>Cursine</span>
            </div>
            <div className={styles.country}>
              <span className={styles['country-text']}>Japanese</span>
            </div>
            <div className={styles['info-container']}>
              <img className={styles.icon} src={hornIcon} alt='Horn icon' />
              <span className={styles['res-info__right-title']}>User Rating</span>
            </div>
            <span className={styles['user-rating__text']}>Excellent</span>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantCard;
