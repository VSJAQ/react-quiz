import React from "react";
import styles from './ActiveQuiz.module.css'
import { AnswersList } from "./answersList/AnswersList";

export const ActiveQuiz = props =>  (
  <div className={styles.activeQuiz}>
    <p className={styles.question}>
    <span>
      <strong>
        {props.activeQuestion}.
      </strong>&nbsp;
      {props.question}
    </span>
      <small>
        {props.activeQuestion} from {props.questionsCounter}
      </small>
    </p>
      <AnswersList answers={props.answers} onAnswerClick={props.onAnswerClick} answerState={props.answerState}/>
  </div>
)
