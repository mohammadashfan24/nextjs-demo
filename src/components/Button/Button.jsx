import React from 'react';
import classNames from 'classnames';

const Button = ({ title, customClass }) => {
  return (
    <button className={classNames(customClass)}>{title}</button>
  )
}

export default Button