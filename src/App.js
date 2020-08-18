import React from 'react';
import './App.css';
// Components
import QuizCard from './components/quiz-card/quiz-card';
import { fetchQuizQuestions } from './API';

function App() {
  console.log(fetchQuizQuestions())
  return (
    <div className="app">
      <div className='decoration'>
        <QuizCard />
      </div>
    </div>
  );
}

export default App;
