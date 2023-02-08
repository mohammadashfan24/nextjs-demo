import React from 'react'
import classNames from 'classnames';

const Title = ({ text, customClass }) => {
  return (
    <h2 className={classNames(customClass)}>{text}</h2>
  )
}

export default Title