import styled, { css } from 'styled-components';

export const Container = styled.div`
  font-size: 1.6rem;
`;

export const Content = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
`;

export const Country = styled.div`
  display: flex;

`;

export const CountryImg = styled.img`
  width: 100%;
  max-width: 50rem;
  height: auto;
`;

export const CountryInfos = styled.div`
  ${({theme}) => css`
    flex: 1;
    display: flex;
    flex-direction: column;

    margin-left: 10rem;
    color: ${theme.colors.text};

    h2 {
      padding-bottom: 4.5rem;
    }
  `}
`;

export const CountryInfosList = styled.div`
  display: flex;
  justify-content: space-between;

  ul {
    list-style: none;
    line-height: 3rem;

    li {
      strong {
        font-weight: 600;
      }
    }
  }
`;

export const BorderCountries = styled.div`
  padding-top: 4.5rem;
  display: flex;
  flex-wrap: wrap;

  strong {
    font-weight: 600;
    margin-right: 1rem;
  }

  button {
    ${({theme}) => css`
      margin-bottom: 1rem;
      padding: 0.5rem 1rem;
      border: 0;
      box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
      background-color: ${theme.colors.elements};
      color: ${theme.colors.text};
    `}
  }

  button + button {
    margin-left: 1rem;
  }
`;