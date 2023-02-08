import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import DefaultCard from "../DefaultCard/DefaultCard";
import Title from "../Title/Title";
import styles from "./GridContainer.module.scss";
import classNames from 'classnames';

const GridContainer = ({ cardData, title, btnText, customClass }) => {
  return (
    <div className={styles.GridContainer}>
      <div className={styles.gridTitleWrapper}>
        {title && <Title text={title} customClass={styles.gridTitle} />}
        {btnText && <Button title={btnText} customClass={styles.viewAll} />}
      </div>
      <div className={classNames(styles.grid, customClass)}>
        {cardData?.map((item) => {
          if(item.title && item.subTitle) {
            return (
              <Card
              image={item.image}
              title={item.title}
              subTitle={item.subTitle}
              description={item.description}
              amount={item.amount}
              showDate={item.showDate}
            />
            )
          }
          return (
            <DefaultCard image={item.image} />
          )
        })}
      </div>
      {btnText && <Button title={btnText} customClass={styles.viewAllMobile} />}
    </div>
  );
};

export default GridContainer;
