import React from 'react';
import styles from './index.module.css';
import { ratingsColor } from '../../utils/ratingsColor';
import Highlights from './Highlights';

const RestaurantPage = (props) => {
  console.log(props);

  const restaurant_name = 'Zebra Asian Noodle Bar';
  const average_cost_for_two = 800;
  const aggregate_rating = '3.9';
  const rating_text = 'Good';
  const currency = 'Kč';
  const votes = '37';
  const cuisines = 'Sushi, Chinese, Asian';
  const establishment = ['Casual Dining'];
  const highlights = [
    'Credit Card',
    'Takeaway Available',
    'Lunch',
    'Delivery',
    'Dinner',
    'Disabled Friendly',
    'Wifi',
  ];
  const address = 'Melantrichova 5, Staré Město, Praha 1';
  const locality = 'Praha 1';
  const city = 'Praha 1';
  const latitude = '50.0852666667';
  const longitude = '14.4212722222';
  const phone_numbers = '+420 777873333';
  const timings = '11:00 to 01:00 (Mon-Sun)';

  return (
    <div className={styles.container}>
      <div className={styles['res-data']}>
        <img
          src='https://b.zmtcdn.com/data/res_imagery/16506533_RESTAURANT_d6d0bdeed6dd655468b2fe6130b0db08.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
          alt='...'
          className={styles['featured-image']}
        />
        <div className={styles['res-info']}>
          <h3 className={styles['restaurant-name']}>{restaurant_name}</h3>

          <span className={`${styles}.${ratingsColor(aggregate_rating)}`}>{aggregate_rating}</span>
          <span>{rating_text}</span>
          <span>{currency}</span>
          <span> ({votes} votes)</span>
        </div>
        <div className={styles['res-info']}>
          <p>
            <strong>Cuisines: </strong>
            {cuisines}
          </p>
          <p>
            <strong>Cost for two: </strong> {currency}
            {average_cost_for_two}
          </p>
        </div>

        <div className={styles['res-info']}>
          <p>{city}</p>
          <p>
            <strong>Address:</strong>
          </p>
          <p>{address}</p>
          <p>{locality}</p>
        </div>
        <div className={styles['res-info']}>
          <span>{establishment}</span>
          <span>{phone_numbers}</span>
          <span>{timings}</span>
        </div>
        <div className={styles['res-info']}>
          <ul className={styles['highlights-list']}>
            {highlights.map((item) => (
              <Highlights name={item} />
            ))}
          </ul>
        </div>
      </div>
      <div className={styles['map-container']}>Карта</div>
    </div>
  );
};

export default RestaurantPage;
