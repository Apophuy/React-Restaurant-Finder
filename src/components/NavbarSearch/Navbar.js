import React, { Component } from 'react';
import { getRestaurants } from '../../api/zomato.js';
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
// <FontAwesomeIcon icon={faSearch} value={this.state.operation}
import styles from './styles.module.css';

class Navbar extends Component {
  render() {
    return (
      <div className={styles.navbar}>
        <nav className={styles['nav-header']}>
          <input
            type='text'
            value={this.props.value}
            onChange={this.props.onChange}
            placeholder='Search..'
            className={styles['search-input']}
          />
          <button className={styles['search-button']} type='submit' onClick={this.props.search}>
            {' '}
            {this.props.operation}{' '}
          </button>
          <ul>
            <li>
              <a href='#'>Home</a>{' '}
            </li>
            <li>
              <a href='#'>Favourites</a>{' '}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
