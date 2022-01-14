import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setTotalCount } from '../redux/quizSlice';
import { useDispatch } from 'react-redux';
import Wrapper from './StartPage.style';

function StartPage() {
    // Local States
    const [count, setCount] = useState(5);

    // Glocal States Related
    const dispatch = useDispatch();

    // Navigation
    const navigate = useNavigate();

    // Helper functions
    const handleOnChange = (e) => {
        setCount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setTotalCount(count));
        navigate('/game');
    };

    // Render

    return (
        <Wrapper>
            <h1>Trivia Quiz</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="#question_count">Number of Questions</label>
                <input id="question_count" placeholder='Questions' value={count} type="tel" onChange={handleOnChange} />
                <button>Submit</button>
            </form>
        </Wrapper>
    );
}

export default StartPage;
