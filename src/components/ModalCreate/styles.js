import styled from "styled-components";

export const Modal = styled.div`
    width: 100%;
    height: 330px;
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

    form {
        margin-top: 30px;
    }

    input {
        border: 0;
        padding: 0px 25px;
        border-radius: 4px;
        outline: 0;
        height: 50px;
        background: #F5F5F5;
        margin-top: 5px;
    }

    label {
        color: #333;
    }

    .form_row {
        display: flex;
        flex-wrap: wrap;
    }

    .input--group {
        display: flex;
        flex-direction: column;
        width: 48%;
        margin: 0 10px;
    }

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
        margin: 30px 10px;
    }

    .create {
        background: #33AAD9;
    }
`;
