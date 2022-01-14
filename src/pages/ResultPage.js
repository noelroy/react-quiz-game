import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ResultCard from '../components/ResultCard';
import { getUserChoices, resetState } from '../redux/quizSlice';

import Wrapper from './ResultPage.style';

function ResultPage() {
    // Global States related
    const userChoices = useSelector(getUserChoices);

    const dispatch = useDispatch();

    const restartGame = () => {
        dispatch(resetState());
    };

    // Render

    if (userChoices.length < 1) {
        return <Navigate replace to="/" />;
    }

    let score = 0;
    userChoices.forEach((element) => {
        if (element.correct) score++;
    });

    return (
        <Wrapper>
            <h1>Result Page</h1>
            <div className="score_card">
                <h2>
                    Score : {score}/{userChoices.length}
                </h2>
                <button onClick={restartGame}>Try Again</button>
            </div>
            {userChoices.map((choice) => (
                <ResultCard key={choice.question} choice={choice} />
            ))}
        </Wrapper>
    );
}

export default ResultPage;
