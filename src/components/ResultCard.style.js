import styled from "styled-components";

const Wrapper = styled.div`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 0.5em 2em;
    margin-bottom: 1em;
    position:relative;

    &:after {
        position:absolute;
        object-fit: cover;
        right:0;
        top:0;
        bottom:0;
        content: '';
        padding : 1em;
        background-color:${props => props.correct ? "green" : "red"};
    }
`

export default Wrapper;