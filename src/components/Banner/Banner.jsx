import React from 'react';
import Button from '../Button/Button';
import styles from './Banner.module.scss';


const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src='./images/banner.svg' />
      <div className={styles.bluredImage}>
        <h2>The perfect night out in Glasgow !</h2>
        <h3>18 Candleriggs</h3>
        <h4>ON 14TH & 15TH FEB</h4>
        <Button title='Book Ticket' customClass={styles.btn} />
        <p>3 COURSE MEAL & SHOW INCLUDED & 17 per person</p>
      </div>
    </div>
  )
}

export default Banner;