import styled from "styled-components";

export const GlobalContent = styled.main`
  padding: 0.5rem;
  text-align: justify;

  h3 {
    text-align: center;
    color: var(--main);
  }

  h5 {
    margin: 0.5rem 0;
    color: var(--main);
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 0.5rem;
  position: fixed;
  top: 0;
  text-align: center;
  z-index: 1;
  color: #fff;
  background-color: var(--main);
`;

export const FooterContainer = styled.header`
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--main);

  div {
    width: 33.33%;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
`;

//
