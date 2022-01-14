import styled from "styled-components";

const Wrapper = styled.div`
    text-align: right;

    &:after{
        content: '';
        display: block;
        border: 2px solid red;
        width: ${props => props.percentage}%;
        transition: all 2.5s;
    }
`

export default Wrapper;