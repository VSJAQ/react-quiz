import React from "react";
import styles from './FinishedQuiz.module.css'

export const FinishedQuiz = props => {
  const successResultsCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }
    return total
  }, 0)

  return (
    <div className={styles.finishedQuiz}>
      <p>Quiz is finished</p>
      <ul>
        {props.quizItems.map((quizItem, index) => {

          const classNamesArr = ['fa', props.results[quizItem.id] === 'success' ? 'fa-check' : 'fa-times', props.results[quizItem.id]]

          return (
            <li key={index}>
              <strong>{index}.</strong> &nbsp;
              {props.quizItems.question}
              <i className={classNamesArr.join(' ')}/>
            </li>
          )
        })}
      </ul>
      <p>Correct: {successResultsCount} from {props.quizItems.length}</p>
      <button>try again</button>
    </div>
  )
}