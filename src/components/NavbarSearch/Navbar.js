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
          <div className={styles['button-wrapper']}>
            <button className={styles['home-button']}>Home</button>
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
          </div>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <a className={styles['list-item__link']} href='#'>
                Home
              </a>{' '}
            </li>
            <li className={styles['list-item']}>
              <a className={styles['list-item__link']} href='#'>
                Favourites
              </a>{' '}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
