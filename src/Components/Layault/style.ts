import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  background: var(--bgHome);
  display: grid;
  grid-template-columns: 6rem 1fr;
  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;
export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1rem;
  background: var(--bgColorLigth);

  .button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--bgColorDark);
    cursor: pointer;
    padding: 1rem;
    border-radius: 1rem;

    svg {
      fill: white;
      width: 24px;
      height: 24px;
    }

    &:hover {
      background: var(--bgColorDarkHover);
    }
  }

  @media (max-width: 40rem) {
    display: none;
  }
`;
export const Content = styled.section`
  border: 1px solid #d3e2e5;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: block;
  max-width: 40rem;
  margin: 1rem auto;
  border-radius: 1.6rem;
  background: white;
`;


export const HeaderStyle = styled.div`

  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 40rem;
  margin: 0 auto;

  a {
    padding: .5rem 1rem;
    border-radius: 0.3rem;
    background: var(--btnColor);
    color: white;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .6rem;

  }
    h3 {
    text-align: center;
    color: var(--TextColorLight);
    font-size: 1.125rem;
  }

  @media (min-width: 40rem) {
    a {
      display: none;
    }
    justify-content: center;
  }
`;
