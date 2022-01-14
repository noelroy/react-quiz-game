import React from 'react';
import Wrapper from './ResultCard.style';

const ResultCard = ({ choice }) => {
    return (
        <Wrapper correct={choice.correct}>
            <h3>{choice.question}</h3>
            <p><span>Your Choice : </span>{choice.userChoice}</p>
            <p><span>Correct Answer : </span>{choice.correctAnswer}</p>
        </Wrapper>
    );
};

export default ResultCard;
