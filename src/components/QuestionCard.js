import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUserChoice } from '../redux/quizSlice';
import Timer from './Timer';
import Wrapper from './QuestionCard.style';

const QuestionCard = ({ question, incrementIndex }) => {
    // Local States
    const [disabled, setDisabled] = useState(true);
    const [options, setOptions] = useState([]);

    // Glocal State related
    const dispatch = useDispatch();

    // Local Logic

    useEffect(() => {
        setDisabled(false);
        const options = [...question.incorrectAnswers].slice(0, 4);
        options.splice(
            Math.floor(Math.random() * options.length),
            0,
            question.correctAnswer
        );
        setOptions(options);
    }, [question]);

    // Helper functions
    const handleOnClick = (e) => {
        setDisabled(true);
        const userChoice = {};
        userChoice.question = question.question;
        userChoice.correctAnswer = question.correctAnswer;
        if (e) {
            userChoice.userChoice = e.target.innerText;
            if (e.target.innerText === question.correctAnswer) {
                e.target.classList.add("correct");
                userChoice.correct = true;
            } else {
                userChoice.correct = false;
                e.target.classList.add("wrong");
            }
        } else {
            userChoice.correct = false;
        }
        dispatch(addUserChoice(userChoice));
        setTimeout(() => {
            incrementIndex();
        }, 2000);
    };

    // Render

    return (
        <Wrapper>
            <h2>
                <Timer displayNextQuestion={handleOnClick} disabled={disabled} />
            </h2>
            <h3>{question.category}</h3>
            <h2>{question.question}</h2>
            <ol>
                {options.map((option) => (
                    <li key={option}>
                        <button
                            className={disabled && option === question.correctAnswer ? 'correct' : ''}
                            disabled={disabled}
                            onClick={handleOnClick}
                        >
                            {option}
                        </button>
                    </li>
                ))}
            </ol>
        </Wrapper>
    );
};

export default QuestionCard;
