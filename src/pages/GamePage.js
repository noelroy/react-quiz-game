import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestions, setQuestions, getTotalCount } from '../redux/quizSlice';

import QuestionCard from '../components/QuestionCard';
import { Navigate } from 'react-router-dom';

function GamePage() {
    // Local States
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);

    // Global States related
    const questions = useSelector(getQuestions);
    const totalCount = useSelector(getTotalCount);

    const dispatch = useDispatch();

    // Use Effect
    useEffect(() => {
        fetch(`https://api.trivia.willfry.co.uk/questions?limit=${totalCount}`)
            .then((res) => res.json())
            .then((res) => dispatch(setQuestions(res)))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // Helper functions
    const incrementIndex = () => {
        setIndex((state) => state + 1);
    };

    // Render
    if (loading) {
        return <h1>Loading</h1>;
    }

    if (totalCount < 1) {
        return <Navigate replace to="/" />;
    }

    if (index >= totalCount) {
        return <Navigate replace to="/result" />;
    }

    return (
        <div>
            <h1>Quiz Trivia</h1>
            <QuestionCard
                question={questions[index]}
                incrementIndex={incrementIndex}
            />
        </div>
    );
}

export default GamePage;
