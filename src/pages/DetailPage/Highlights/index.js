import React from 'react';
import styles from './index.module.css';

const Highlights = ({ name }) => {
  return (
    <li className={styles['list-item']}>
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default Highlights;
