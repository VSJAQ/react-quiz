import React from "react";
import styles from './Button.module.css'

export const Button = (props) => {

  const classesArr = [styles.button, styles[props.type]]

  return (
    <button onClick={props.onClick} className={classesArr.join(' ')} disabled={props.disabled}>
      {props.children}
    </button>
  )

}