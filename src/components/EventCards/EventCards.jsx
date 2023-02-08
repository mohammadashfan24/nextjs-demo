import React from 'react'
import Card from '../Card/Card'
import styles from './EventCards.module.scss';

const EventCards = () => {
  return (
    <div className={styles.eventCardsWrapper}>
        <img className={styles.eventCardLeft} src='./images/cards/eventcards/nova.svg' alt='nova' />
        <img className={styles.eventCardCenter} src='./images/cards/eventcards/carnage.svg' alt='carnage' />
        <img className={styles.eventCardRight} src='./images/cards/eventcards/open-mick.svg' alt='open-mick' />
    </div>
  )
}

export default EventCards