import React, { useState, useEffect } from 'react';

import Wrapper from './Timer.style';

const Timer = ({ displayNextQuestion, disabled }) => {
    const [countDownTimer, setCountDownTimer] = useState(0);

    function tick() {
        if(disabled){
            return;
        }
        if (countDownTimer >= 10) {
            displayNextQuestion();
            setCountDownTimer(0);
        } else {
            setCountDownTimer((state) => state + 1);
        }
    }

    useEffect(() => {
        setCountDownTimer(0)
    }, [disabled])

    useEffect(() => {
        const id = setTimeout(() => {
            tick();
        }, 1000);
        return () => clearInterval(id);
    });

    return <Wrapper percentage={countDownTimer*10}>{10-countDownTimer}</Wrapper>;
};

export default Timer;
