import styled from "styled-components";

// export const Container = styled.div`
//   display: grid;
//   place-items:center;
//   background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
//   height: 100vh;
//   width: 100%;
  
//   .content{
//     position: relative;
//     width: 80%;
//     margin: 20px auto;
//     max-width: 1100px;
//     border: 1px solid black;

//     header,.box{
//       display: flex;
//       justify-content:space-between;
//       align-items:center;
//     }

//     header{
//       .location{
//         display: flex;
//         flex-direction: column;
//         align-items: flex-end;
//         color: #fff;
//       }
//     }
//     .box{
//       .left-content{
//         margin-left: 30px;

//         h1{
//           font-size: 76px;
//           font-weight: 900;
//           line-height: 70px;
//         }
//       }
//     }
   
//   }
// `;


export const Container = styled.div`
  display: grid;
  place-items:center;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  height: 100vh;
  width: 100%;

  div.content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 85%;
    max-width: 1200px;
    position: relative;

    header{
      display: flex;
      align-items:center;
      justify-content:space-between;

      img{
        left: -40px;
      }
      .location{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: #fff;
        font-size: 24px;
        line-height: 34px;
      }
    }
    .box{
      display: grid;
      grid-template-columns: 1fr 2fr;

      .left-content{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:flex-start;
        color: #fff;

        h1{
          font-size: 76px;
          font-weight: 900;
          line-height: 70px;
          margin-bottom: 0;
        }
        p{
          max-width: 350px;
          margin-top: 20px;
          font-size: 24px;
          line-height: 34px;
        }

      }
      .right-content{
        display: flex;
        justify-content: center;
        align-items:flex-end;
        position: relative;
        top: -60px;
        
        svg{
          position: absolute;
          bottom:0;
          right:90px;
          width: 60px;
          height: 60px;
          padding: 10px;
          background: #FFD666;
          border-radius: 15px;
          cursor:pointer;
          transition: background ease 0.3s;

          &:hover{
            background: #96FEFF;
          }
        }

        img{
          top: -45px;
          left: -15px;
          overflow:initial;
        }
      }
    }

  }
`;
