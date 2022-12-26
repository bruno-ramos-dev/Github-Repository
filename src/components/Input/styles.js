import styled from "styled-components";

export const InputContainer = styled.div`
    background: linear-gradient(#22272E, #22272E) padding-box,
                linear-gradient(to right, darkblue, darkorchid) border-box;
    border: 1px solid transparent;
    border-image: linear-gradient(to right, darkblue, darkorchid) 1;
    border-radius: 20px;

    height: 62px;
    width: 80%;
    margin: 20px;

    input {
        background: transparent;
        border: 0;
        width: 100%;
        height: 62px;
        padding: 0 20px;
        color: #C5B3FF;
        font-size: 20px;
        outline: 8px;
    }
`