import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import questionBank from "./questionBank/questionBank.js";
import QuestionBox from "./components/answers";
import Result from "./components/Result";


class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: [],
      score: 0,
      questionsRemaining: 0,
    };
}

  getQuestion = () => {
    questionBank().then(question => {
      this.setState({
        questionBank: question,
      });
    });
  };

  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses: this.state.responses < 6 ? this.state.responses +1 : 6
    });
  };

  playAgain = () => {
    this.getQuestion();
    this.setState({
      score: 0,
    });
  };

  componentDidMount() {
    this.getQuestion();
  }


  render() {
      let { nr, total, showButton } = this.state;
    return (

      <Container>

          <div className="qBox">
          {this.state.questionBank.map(
            ({question, answers, correct, questionId}) => (

          <Row>
              <QuestionBox
                question={question}
                options={answers}
                correct={correct}
                showButton={this.handleShowButton}
                selected={answer => this.computeAnswer(answer, correct)}
              />
              <div className="submit">
                {showButton ? <button className="fancy-btn" onClick={this.nextQuestion} >{nr===total ? 'Finish Quiz' : 'Next question'}</button> : null}
              </div>
          </Row>
            )
          )}

          {this.state.responses === 6 ? (<Result score={this.state.score} playAgain={this.playAgain} />) : null}
          </div>
      </Container>
    );
  }
}


ReactDOM.render(<Quiz />, document.getElementById("root"));
