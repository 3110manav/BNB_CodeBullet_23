import React, { useState } from 'react'
import quizData from '../../constant/quizData.json'
import './quizStyles.css'
const Quiz = () => {
    const quizQuestions  = quizData;
    let questions = new Array(5)
    // console.log(questions)
    for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * quizData.length);
        questions[i] = quizQuestions[randomIndex]
        // console.log("Randomly chosen index:", randomIndex);
        // console.log("Value at that index:", myArray[randomIndex]);
    }
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className="quizContainer">
            <div className='app'>
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption,index) => (
                                <button key={index} className="quiz-btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Quiz
