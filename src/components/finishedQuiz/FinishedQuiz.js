import React from "react";
import styles from './FinishedQuiz.module.css'
import { Button } from "../UI/Button/Button";

export const FinishedQuiz = ({results, quizItems, onRestartBtnClick}) => {
  const successResultsCount = Object.keys(results).reduce((total, key) => {
    if (results[key] === 'success') {
      total++
    }
    return total
  }, 0)

  return (
    <div className={styles.finishedQuiz}>
      <p><strong>Quiz is finished</strong></p>
      <ul>
        {quizItems.map((quizItem, index) => {

          const classNamesArr = ['fa', results[quizItem.id] === 'success' ? 'fa-check' : 'fa-times', styles[results[quizItem.id]]]

          return (
            <li key={index}>
              <strong>{index}</strong>. &nbsp;
              {quizItem.question}
              <i className={classNamesArr.join(' ')}/>
            </li>
          )
        })}
      </ul>
      <p>Correct: {successResultsCount} from {quizItems.length}</p>
      <Button onClick={() => {onRestartBtnClick()}} type='primary'>try again</Button>
      <Button type='success'>Show quiz list</Button>
    </div>
  )
}