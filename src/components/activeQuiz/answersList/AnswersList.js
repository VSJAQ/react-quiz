import React from "react";
import styles from './AnswersList.module.css'
import { AnswerItem } from "./answerItem/AnswerItem";

export const AnswersList = ({answers, onAnswerClick, answerState}) => (
  <ul className={styles.answersList}>
    {
      answers.map((answer, index) => {
        return <AnswerItem key={index} answer={answer} onAnswerClick={onAnswerClick}
                           answerState={answerState ? answerState[answer.id] : null}/>
      })
    }
  </ul>
)