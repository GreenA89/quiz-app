import React, { useState } from 'react';
import '../quiz-card/quiz-card.css';

// Components
import StartScore from '../start-score/start-score';
import QuestionCard from '../question-card/question-card';
import { fetchQuizQuestions } from '../../API';

const TOTAL_QUESTIONS = 10;

const QuizCard = () => {

    const [questions, setQuestions] = useState([{}]);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(false);
    const [gameOver, setGameOver] = useState(true);
    const [index, setIndex] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(false);
    const [incorrectAnswer, setIncorrectAnswer] = useState(false);



    const startGame = async() => {
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuizQuestions();
        
        setQuestions(newQuestions);
        setScore(0);
        setIndex(0);
        setLoading(false);
        setIncorrectAnswer(false);
        setCorrectAnswer(false);
    }

    const nextQuestion = () => {
        setIndex(index + 1)
        setIncorrectAnswer(false);
        setCorrectAnswer(false);
    }

    const finishGame = () => {
        setGameOver(true)
    }

    const handleAnswer = (userAnswer) => {
        if (userAnswer === questions[index].correct_answer && correctAnswer===false && incorrectAnswer===false) {
            setScore(score + 1)
            setCorrectAnswer(true);
            setIncorrectAnswer(false);
            document.getElementById(userAnswer).style.background='green';
        } else if (correctAnswer===false && incorrectAnswer===false) {
            setIncorrectAnswer(true);
            setCorrectAnswer(false);
            document.getElementById(userAnswer).style.background='red';
        }
    }

    return (
        <div className='quiz-card' >
            <h1 className='title'>React Quiz</h1>
            <StartScore 
                startGame={startGame} 
                score={score} 
                gameOver={gameOver}
                nextQuestion={nextQuestion}
                index={index}
                loading={loading}
                finishGame={finishGame}
            />
            {!gameOver && <QuestionCard 
                questionNumber={index}
                totalQuestions={TOTAL_QUESTIONS}
                gameOver={gameOver}
                answers={questions[index].answers}
                question={questions[index].question}
                handleAnswer={handleAnswer}
                correctAnswer={correctAnswer}
                incorrectAnswer={incorrectAnswer}
            />}
            {correctAnswer && !gameOver && <p className='correct'>Correct!</p>}
            {incorrectAnswer && !gameOver && <p className='incorrect'>Wrong, Bucko!</p>}
        </div>
    )
}

export default QuizCard;