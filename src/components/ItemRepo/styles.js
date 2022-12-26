import styled from "styled-components";

export const ItemRepoContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        margin-left: 10px;
        color: #C3C3C3;
    }

    p {
        font-size: 16px;
        margin-left: 12px;
        margin-bottom: 18px;
        color: #7F7F7F;
    }

    button {
        background: linear-gradient(#22272E, #22272E) padding-box,
                linear-gradient(to right, darkblue, darkorchid) border-box;
        border: 2px solid transparent;
        border-radius: 20px;
        font-size: 16px;
        padding: 3px;
        margin: 10px 0 5px 10px;
        cursor: pointer;
        color: #C5B3FF;

        &:hover {
            outline: 3px ridge rgba(170, 50, 220, .6);
        }

        a {
            text-decoration: none;
            color: #C5B3FF;
        }
    }

    hr {
        background: linear-gradient(#22272E, #22272E) padding-box,
                linear-gradient(to right, darkblue, darkorchid) border-box;
        border: 1px solid transparent;
        margin: 20px 0;
    }
`