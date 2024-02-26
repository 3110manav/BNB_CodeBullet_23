import React, { useEffect, useState } from 'react'
import './quizStyles.css'
import quizData from '../../constant/quizData.json'
import RankTable from './RankTable.jsx'
import { addScoreApi } from '../../service/api.js'

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [currentUser, setCurrentUser] = useState({});
    const quizQuestions = quizData;
    let questions = new Array(5)
    // console.log(questions)
    for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * quizData.length);
        questions[i] = quizQuestions[randomIndex]
        // console.log("Randomly chosen index:", randomIndex);
        // console.log("Value at that index:", myArray[randomIndex]);
    }

    console.log(showScore) // Changing it to true
    useEffect(() => {
        const addScore = async () => {
            console.log("Score while addScoreApi" + score);
            /*
            response from api
            {
                "user": "65daec99917ecee41a2fb46a",
                "username": "yolo",
                "email": "yolo@gmail.com",
                "score": 2,
                "_id": "65dc6e8505f06355d817db81",
                "__v": 0
            }
            */
            let res = await addScoreApi(score);
            console.log(res)
            if(res.status === 200){
                console.log(res)
                setCurrentUser(res.data);
            }
            
        }
        if(showScore){
            addScore()
        }
    }, [showScore])

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        console.log("next Question :" + nextQuestion + " current Question:" + currentQuestion)
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
            console.log(showScore)
        }
    };
    return (
        <div>
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
                                    <span className='question-number'>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <div className='question-text'>{questions[currentQuestion].questionText}</div>
                            </div>
                            <div className='answer-section'>
                                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                    <button key={index} className="quiz-btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div>
                {showScore ? <RankTable currentUser={currentUser} /> : <RankTable />}
            </div>
        </div>
    )
}

export default Quiz
