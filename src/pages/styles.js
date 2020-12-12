import styled from "styled-components";

export const Main = styled.div`
    
`;

export const Container = styled.div`
    width: 80%;
    max-width: 1150px;
    margin: 45px auto;

    .box {
        padding: 25px 35px;
        background: #FFF;
        border-radius: 5px;
        .line {
            display: flex;
            align-items: center;
            justify-content: space-between;
            button {
                background: #33AAD9;
                border: 0;
                color: #FFF;
                padding: 8px 24px;
                border-radius: 4px;
                cursor: pointer;
                outline: 0;
            }
        }
        .title {
            color: #333;
        }
        .table {
            margin-top: 35px;
            .head {
                display: grid;
                padding: 0px 18px;
                grid-template-columns: 25% 25% 25% 25%;
                h5 {
                    font-weight: 400;
                    color: #33AAD9;
                    opacity: 75%;
                }
            }
            .body .item {
                background: #FFF;
                box-shadow: 0 0px 25px -2px rgba(0, 0, 0, .1);
                display: grid;
                grid-template-columns: 25% 25% 25% 25%;
                padding: 18px;
                h5 {
                    color: #505050;
                }
                margin-top: 15px;
                cursor: pointer;
            }
        }
    }
`;
