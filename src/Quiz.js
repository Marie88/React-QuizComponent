import React, { Component } from 'react'
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";

let quizData = require('./quiz_data.json')

class Quiz extends Component{
    constructor(props) {
        super(props);
        this.state = {quiz_position: 1};
    }

    render() {
        const isQuizEnd = this.state.quiz_position -1 == quizData.quiz_questions.length;
        let quizComponent;
        if(isQuizEnd){
            quizComponent = <QuizEnd resetClickHandler = {this.handleResetClick.bind(this)}/>;
        }else{
            quizComponent=  <QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={quizData.quiz_questions[this.state.quiz_position -1]}/>;
        }
        return(
            <div>
                {quizComponent}
          </div>
        )
    }

    showNextQuestion(){
    this.setState((state) => {
        return {quiz_position : state.quiz_position +1}
    })
    }

    handleResetClick(){
    this.setState({quiz_position : 1})
    }
}

export default Quiz