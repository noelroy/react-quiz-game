import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalCount: 0,
    questions: [],
    userChoices: [],
};

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setQuestions: (state, action) => {
            state.questions = action.payload;
        },
        setTotalCount: (state, action) => {
            state.totalCount = action.payload;
        },
        addUserChoice: (state, action) => {
            state.userChoices.push(action.payload);
        },
        resetState: (state) => {
            state.totalCount = 0;
            state.questions = [] ;
            state.userChoices = [] ;
        },
    },
});

export const { setQuestions, setTotalCount, addUserChoice, resetState } = quizSlice.actions;

export const getQuestions = (state) => state.quiz.questions;

export const getTotalCount = (state) => state.quiz.totalCount;

export const getUserChoices = (state) => state.quiz.userChoices;

export default quizSlice.reducer;
