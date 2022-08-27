import styled from 'styled-components';

export const Container = styled.div`
    font-family: "Nunito", sans-serif;
   
    h1{
        color: var(--TextColorLight);
        font-weight: bold;
        border-bottom: 1px solid #EBF2F5;        
        font-size: 24px;
    }
    .field{
        display: flex;
        flex-direction: column;
        align-items:flex-start;
        margin: 20px 0;
        padding:0;

        .info-sobre{
            display: flex;
            justify-content: center;
            padding: 0;
            align-items:center;
            color:var(--TextColorLight);

            label{
                margin: 0;
                padding-right: 15px;
            }
        }
        label{
            color:var(--TextColorLight);
            font-weight: 400;
        }
        
        input,textarea{
            border-radius: 10px;
            background: #F5F8FA;
            color: #5C8599;
            border:1px solid #D3E2E5;
            outline: none;
            padding: 10px;
            width: 100%;
            font-size: 16px;
            margin-top: 5px;
            font-weight: bold;
        }
        textarea{
            min-height: 120px;
            max-height: 240px;
            resize: vertical;
            padding: 10px;
            line-height: 28px;
        }
        button{
            margin-top: 5px;
            padding: 15px 25px;
            font-size: 26px;
            background: #F5F8FA;
            color: var(--bgColorLigth);
            border:1px dashed #D3E2E5;
            cursor:pointer;

            &:hover{
                opacity: 0.;
            }
        }
        input[type="submit"]{
            width: 100%;
            height: 54px;
            cursor: pointer;
            background: #3CDC8C;
            border-radius: 20px;
            color: #FFFFFF;
            font-weight: 600;
            transition: background ease .4s;

            &:hover{
                background: #36CF82;
            }
        }
    }
    .toggle-content{
        display: flex;
        justify-content:space-between;
        align-items:center;
        padding: 0;
        color:var(--TextColorLight);

        input[type="checkbox"]{
            appearance: none;
            width: 50px;
            height: 18px;
            border-radius: 50px;
            background: #F5F8FA;
            border:1px solid #D3E2E5;
            cursor: pointer;
            transition: all 0.3s;
            position: relative;

            &::before{
                content:"";
                position:absolute;
                width: 20px;
                height: 10px;
                border-radius: 50px;
                background: var(--TextColorLight);
                left: 4px;
                top: 3px;
                transition: .3s;
            }


            &:checked{
                background: #3CDC8C;
                &::before{
                    left: 24px;
                    background: var(--bgHome);
                }
            }
        }
    }

`;