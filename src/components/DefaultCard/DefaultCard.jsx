import React from 'react';
import styles from './DefaultCard.module.scss';
import classNames from 'classnames';

const DefaultCard = ({ image, customClass }) => {
  return (
    <div className={classNames(styles.defaultCard, customClass)}>
        <img src={image} alt='image' />
    </div>
  )
}

export default DefaultCard