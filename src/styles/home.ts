import styled from "styled-components";

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

export const Container = styled.div`
  display: grid;
  place-items: center;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  height: 100vh;
  width: 100%;

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
        }
      }
    }
  }
`;
