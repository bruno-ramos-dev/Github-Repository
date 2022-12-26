import styled from "styled-components";

export const ButtonContainer = styled.button`
        background: linear-gradient(#22272E, #22272E) padding-box,
                    linear-gradient(to right, darkblue, darkorchid) border-box;
        border: 2px solid transparent;
        border-radius: 20px;
        font-size: 20px;
        margin-bottom: 20px;
        cursor: pointer;
        color: #C5B3FF;

        height: 62px;
        width: 40%;

        &:hover {
            outline: 3px ridge rgba(170, 50, 220, .6);
        }
`