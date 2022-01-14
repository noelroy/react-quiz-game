import styled from "styled-components";

const Wrapper = styled.div`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 0.5em 2em;
    margin-top: 2em;

    ol {
        padding-left: 0;
    }

    li{
        margin: 1em 0;
        list-style: none;
    }

    button{
        min-width : min(40em, 100%);
        padding: 1em 1em;
        text-align: left;
        background-image: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 51%, #a1c4fd 100%);
        transition: 0.5s;
        color: white;
        box-shadow: 0 0 20px #eee;
        border-radius: 0.5em;
        border: none;
        transition-duration: 0.4s;
        font-size: 1em;
        font-weight: bold;
    }

    button[disabled=true] {
        opacity : 0.5;
    }

    button:hover {
        background-position: right center;
    }

    .correct {
        background-image: linear-gradient(to right, #84fab0 0%, #8fd3f4 51%, #84fab0 100%);
    }

    .wrong {
        background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);
    }
`

export default Wrapper;