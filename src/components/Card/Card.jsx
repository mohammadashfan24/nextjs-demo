import Image from "next/image";

import React from "react";
import Button from "../Button/Button";
import styles from "./Card.module.scss";

const Card = ({ image, title, subTitle, description, amount, showDate }) => {
  return (
    <div className={styles.card}>
      <div className={styles.topContent}>
        <img src={image} alt="show image" />
      </div>
      <div className={styles.bottomContent}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.subTitle}>{subTitle}</div>
        <p className={styles.description}>{description}</p>
        <div div className={styles.wrapper}>
          <div className={styles.ticketWrapper}>
            <img src="./images/cards/ticket.svg" alt="ticket logo" />
            <span className={styles.ticket}>Ticket</span>
            <span className={styles.amount}>${amount}</span>
          </div>
          <div className={styles.timeWrapper}>
            <img src="./images/cards/time.svg" alt="time logo" />
            <div className={styles.showDate}>{showDate}</div>
          </div>
        </div>
        <div className={styles.container}>
          <img src="./images/cards/calender.svg" alt="calender logo"/>
          <span>19th October 2022</span>
        </div>
        <Button title="Book Tickets" customClass={styles.bookBtn} />
      </div>
    </div>
  );
};

export default Card;
