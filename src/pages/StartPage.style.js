import styled from "styled-components";

const Wrapper = styled.div`

disply: flex;
justify-items: center;
align-items: center;

h1 {
    text-align: center;
}

form {
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: 1.5em;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

input{
    padding: 0.7em 2em;
    text-align: center;
}

button {
    width: max-content;
    color: #a1c4fd;
    padding: 0.7em 2em;
    background: transparent;
    box-shadow: 0 0 20px #eee;
    border: 2px solid #a1c4fd;
}

`

export default Wrapper;