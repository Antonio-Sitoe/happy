import styled, { keyframes } from "styled-components";

export const NavLink = styled.a`
  border-radius: 0.9rem;
  max-width: 60px;
  width: 100%;
  height: 60px;
  background: #ffd666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.6s;
  svg {
    color: #252525;
    width: 30px;
    height: 30px;
  }

  &:hover {
    svg {
      stroke: #15c3d6;
    }
    background: #96feff;
  }
`;

const animateIlustration = keyframes`
  0%{
    transform: rotate(0deg);
  }
  25%{
    transform: rotate(3deg);
  }
  50%{
    transform: rotate(0deg);
  }
  75%{
    transform: rotate(-3deg);
  }
  100%{
    transform: rotate(0deg);
  }
`
export const Container = styled.div`
  display: grid;
  place-items: center;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  height: 100vh;
  width: 100%;
  padding: 20px;
  overflow:auto;

  div.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 85%;
    max-width: 1200px;
    position: relative;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        left: -40px;
      }
      .location {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: #fff;
        font-size: 24px;
        line-height: 34px;
      }
    }
    .box {
      display: grid;
      grid-template-columns: 1fr 2fr;

      .left-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        color: #fff;

        h1 {
          font-size: 76px;
          font-weight: 900;
          line-height: 70px;
          margin-bottom: 0;
        }
        p {
          max-width: 350px;
          margin-top: 20px;
          font-size: 24px;
          line-height: 34px;
        }
      }
      .right-content {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        position: relative;
        top: -60px;

        img {
          top: -45px;
          left: -15px;
          overflow: initial;
          animation: ${animateIlustration} 8s linear infinite;
        }
      }
    }
  }

  /* Responsividade */

  /* md */
  @media(max-width: 1048px){
    div.content{
      header{
        .location{font-size:20px}
      }
      .box{
        .left-content{
          h1{
            font-size: 56px;
            line-height: 60px;
          }
          p{font-size: 20px}
        }
      }
    }
  }
  /* sm */
  @media(max-width: 700px){
    div.content{
      width: 98%;
      
      header{
        gap: 15px;//Remover

        .location{
          position: relative;
          top: 4px; //Remover 
          text-align:right;//Remover
          font-size: 16px;
          line-height: 20px;
          
        }
      }
      .box{
        display: flex;
        flex-direction: column-reverse;
        align-items:center;
        justify-content: center;
        
        .left-content{
          h1{
            font-size: 46px;
            line-height: 40px;
          }
          p{
            margin-top:15px;
            font-size: 18px;
            line-height: 20px;
          }
        }
        .right-content{
          align-items:flex-end;
          top:0px;

          .img{
            border: 1px solid black;
          }
        }
      }
    }
  }
  /* xs */
`;
