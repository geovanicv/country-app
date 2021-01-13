import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Content = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
`;

export const InputContent = styled.div`
  @media (max-width: 630px) {
    flex-direction: column;
    align-items: flex-start;

    select {
      margin-top: 5rem;
    } 
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 3rem 0 5rem;
`;

export const InputBlock = styled.div`
  ${({theme}) => css`
    position: relative;
    display: flex;
    align-items: center;

    svg {
      position: absolute;
      left: 2rem;
      color: ${theme.colors.text};
    }
  `}

  input {
    ${({theme}) => css`
      height: 6rem;
      width: 36rem;
      padding: 0 3rem 0 6rem;
      border-radius: 4px;
      border: 0;
      box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
      background-color: ${theme.colors.elements};
      color: ${theme.colors.text};

      &::placeholder {
        color: ${theme.colors.text};
      }
    `}
  }
`;

export const SelectBlock = styled.div`
  @media (max-width: 630px) {
    align-items: initial;

    svg {
      bottom: 15%;
    }
  }

  ${({theme}) => css`
    position: relative;
    display: flex;
    align-items: center;

    svg {
      position: absolute;
      right: 2rem;
      color: ${theme.colors.text};
      pointer-events: none;
    }
  `}

  select {
    ${({theme}) => css`
      height: 6rem;
      width: 20rem;
      padding: 0 2rem;
      border-radius: 4px;
      border: 0;
      appearance: none;
      box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
      background-color: ${theme.colors.elements};
      color: ${theme.colors.text};
    `}
  }
`;



export const CountriesContent = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, min(26rem, 26rem));
  gap: 6rem;
  justify-content: center;
`;
