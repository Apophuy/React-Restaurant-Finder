import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from './index.module.css';

class Navbar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <nav>
          <ul>
            <li>
              <a className={styles.link} href='#'>
                Home
              </a>{' '}
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
