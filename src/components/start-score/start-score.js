import React from 'react';
import '../start-score/start-score.css';


const StartScore = (props) => {

        return (
        <div className='start-score'>
            <div>
                {   
                    props.gameOver ? (
                    <button className='start button' onClick={props.startGame}>Start Quiz</button>
                    ) : props.index < 9 ? (
                    <button className='next button' onClick={props.nextQuestion}>Next Question</button>
                    ) : (
                    <button className='next button' onClick={props.finishGame}>Finish Game</button>
                    )
                }
            </ div>
            {
                props.loading ? (
                    <p>Loading...</p>
                ) : (
                    <p></p>
                )
            }
            <div className='score'>Score: {props.score}</div>
        </div>
    )
}

export default StartScore;