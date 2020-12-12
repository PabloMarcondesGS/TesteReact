import styled from "styled-components";

export const Modal = styled.div`
    width: 100%;
    max-width: 1100px;
    position: fixed;
    overflow: hidden;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 0);
    background: #FFF;
    border-radius: 6px;
    padding: 40px;
    box-shadow: 0 0px 30px -2px rgba(0, 0, 0, .2);

    input {
        border: 0;
        padding: 0px 10px;
        outline: 0;
    }

    @keyframes mymove {
        from {bottom: -400px;}
        to {bottom: 0;}
    }

    animation: mymove .6s 0s;

    .line {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 18px;
        h3 {
            color: #333;
        }
        div {
            cursor: pointer;
        }
    }

    button {
        border: 0;
        outline: 0;
        color: #FFF;
        cursor: pointer;
        padding: 6px 25px;
        border-radius: 5px;
    }

    .edit {
        background: #33AAD9;
    }

    .delete {
        margin-left: 12px;
        background: #C93232;
    }
`;
