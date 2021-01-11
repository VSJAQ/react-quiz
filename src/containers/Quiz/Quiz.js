import React, {Component} from "react";
import styles from './Quiz.module.css'
import { ActiveQuiz } from "../../components/activeQuiz/ActiveQuiz";
import { FinishedQuiz } from "../../components/finishedQuiz/FinishedQuiz";

export class Quiz extends Component {
  state={
    activeQuestion: 0,
    answerState: null,
    isQuizFinished: false,
    quiz: [
      {
        id: 1,
        question: 'What kind of bird you are?',
        answers: [
          {text: 'Golub`', id: 1},
          {text: 'Yorobei', id: 2},
          {text: 'Dolbodyatel', id: 3},
          {text: 'Nevermind', id: 4},
        ],
        correctAnswer: 3,
      },
      {
        id: 2,
        question: 'Sutulaya li ty sobaka?',
        answers: [
          {text: 'Yep', id: 1},
          {text: 'Certainly', id: 2},
          {text: `Don't think so`, id: 3},
          {text: 'Of course', id: 4},
        ],
        correctAnswer: 2,
      },
    ],
    results: {}
  }

  answerClickHandler = (answerId) => {
    const currentQuizItem = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }
    debugger
    if (answerId === currentQuizItem.correctAnswer) {
      if (!results[currentQuizItem.id]) {
        results[currentQuizItem.id] = 'success'
      }
      this.setState({
        answerState: {[currentQuizItem.answers.id]: 'success'},
        results
      })
        const showingAnswerTimeout = window.setTimeout(() => {
          if (this.isQuizFinished()) {
            this.setState({
              isQuizFinished: true
            })
          } else {
            this.setState({
              activeQuestion: this.state.activeQuestion + 1,
              answerState: null
            })
            window.clearTimeout(showingAnswerTimeout)
          }
        }, 1000)
    } else {
      results[currentQuizItem.id] = 'error'
      this.setState({
        answerState: {[currentQuizItem.answers.id]: 'error'},
        results
      })
    }
  }

  isQuizFinished = () => {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className={styles.quiz}>
        <div className={styles.quizWrapper}>
          <h1>Quiz</h1>
          {
            this.state.isQuizFinished
              ? <FinishedQuiz quizItems={this.state.quiz}
                              results={this.state.results}
              />
              : <ActiveQuiz answers={this.state.quiz[this.state.activeQuestion].answers}
                          question={this.state.quiz[this.state.activeQuestion].question}
                          activeQuestion={this.state.activeQuestion + 1}
                          questionsCounter={this.state.quiz.length}
                          onAnswerClick={this.answerClickHandler}
                          answerState={this.state.answerState}
              />
          }
        </div>
      </div>
    )
  }
}