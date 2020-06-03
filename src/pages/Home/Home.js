import React, { Component } from 'react';
import styles from './index.module.css';
import Navbar from '../../components/NavbarHome/Navbar';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className={styles.main}>
          <video src='../../assets/video-bg.mp4' autoPlay loop muted></video>
        </div>
        <div className={styles.title}>
          <label htmlFor='search'> Don't know where to eat healthy? </label>
          <input className={styles.input} type='text' id='search' />
        </div>
      </div>
    );
  }
}

export default Home;
