import React from "react";
import styles from './MenuToggle.module.css';

export const MenuToggle = props => {

  const classNameArr = [
    styles.menuToggle,
    'fa',
  ]

  if (props.isOpen) {
    classNameArr.push('fa-times')
    classNameArr.push(styles.open)
  } else {
    classNameArr.push('fa-bars')
  }

  return (
    <i
      className={classNameArr.join(' ')}
      onClick={props.onToggle}
      />
  )
}