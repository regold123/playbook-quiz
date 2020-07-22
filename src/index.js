import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import questionBank from "./questionBank/questionBank.js";
import QuestionBox from "./components/answers";
import Popup from "./components/popup";


class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionBank: [],
      score: 0,
      total: questionBank.length,
      qR: 0,
      showButton: false,
      displayPopup: 'flex',
      classNames: ['','','',''],
    };
}

  pushData(qR) {
    this.setState({
      question: questionBank[qR].question,
      answer1: questionBank[qR].answers[0],
      answer2: questionBank[qR].answers[1],
      answer3: questionBank[qR].answers[2],
      answer4: questionBank[qR].answers[3],
      correct: questionBank[qR].correct,
      qR: this.state.qR + 1,
    });
  }

  nextQuestion = () => {
    let { qR, total } = this.state;

    if (qR === total){
      this.setState({
        displayPopup: 'flex',
      });
    } else {
      this.pushData(qR);
      this.setState({
        showButton: false,
      });
    }
  }


  showButton = () => {
    this.setState({
      showButton: true,
    });
  };

  startQuiz = () => {
    this.setState({
      displayPopup: 'none',
      qR: 1,
    });
  }

  playAgain = () => {
    this.setState({
      score: 0,
      total: questionBank.length,
      qR: 0,
      showButton: false,
      displayPopup: 'flex',
      classNames: ['','','',''],
      question: questionBank[0].question,
      answer1: questionBank[0].answers[0],
      answer2: questionBank[0].answers[1],
      answer3: questionBank[0].answers[2],
      answer4: questionBank[0].answers[3],
      correct: questionBank[0].correct,
    });
  }

  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
  };


  componentDidMount() {
    let { qR } = this.state;
    this.pushData(qR);
  }


  render() {
    const qR = this.state.qR;
    const total = this.state.total;
    const question = this.state.question;
    const answer1 = this.state.answer1;
    const answer2 = this.state.answer2;
    const answer3 = this.state.answer3;
    const answer4 = this.state.answer4;
    const correct = this.state.correct;
    const showButton = this.state.showButton;
    const classNames = this.state.classNames;
    const displayPopup = this.state.displayPopup;
    const score = this.state.score;

    return (

      <Container>

          <div className="qBox">

          <Row>
              <QuestionBox
                number={qR}
                total={total}
                question={question}
                options={[answer1, answer2, answer3, answer4]}
                correct={correct}
                classNames={classNames}
                showButton={this.showButton}
                selected={answer => this.computeAnswer(answer, correct)}
                playAgain={this.playAgain}
              />
              <div className="submit">
                {showButton ? <button className="fancy-btn" onClick={this.nextQuestion} >{qR === total ? 'Finish Quiz' : 'Next question'}</button> : null}
              </div>
          </Row>

          <Popup
              style={{display: displayPopup}}
              number={qR}
              score={score}
              total={total}
              startQuiz={this.startQuiz}
              playAgain={this.playAgain}
            />

          </div>
      </Container>
    );
  }
}


ReactDOM.render(<Quiz />, document.getElementById("root"));
