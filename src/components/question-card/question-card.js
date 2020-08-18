import React from 'react';
import '../question-card/question-card.css'


const QuestionCard = (props) => {
    
    return (
        <div className='question-card'>
            {!props.gameOver ? (
                <p className='number'>
                    Question: {(props.questionNumber + 1) + ' / ' + props.totalQuestions}
                </p>
                ) : (
                <p></p>
                )
            }
            <p dangerouslySetInnerHTML={{__html: props.question}}></p>
            {!props.answers ? (
                <div> 
                </div>
                ) : (
                <div>
                    {props.answers.map(answer => (
                            <div key={answer}>
                                <button className='button answer-button' onClick={() => props.handleAnswer(answer)} id={answer}>
                                    {answer}
                                </button>
                            </div>
                        )
                    )}
                </div>
                )
            }
        </div>
    )
}

export default QuestionCard;