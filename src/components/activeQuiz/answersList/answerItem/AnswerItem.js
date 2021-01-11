import React from "react";
import styles from './AnswerItem.module.css'

export const AnswerItem = ({answer, onAnswerClick, answerState}) => {
  const classNameArr = [styles.answerItem]

  if (answerState) {
    classNameArr.push(styles[answerState])
  }

  return (
    <li className={classNameArr.join(' ')} onClick={() => onAnswerClick(answer.id)}>{answer.text}</li>
  )
}