import styled from 'styled-components';

export const Container = styled.div`
  height: 33rem;
  width: 26rem;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.elements};
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
`;

export const CountryImg = styled.img`
  width: 100%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);

`;

export const CountryInfo = styled.div`
  padding: 2rem;
  width: 100%;
  color: ${props => props.theme.colors.text};

  > strong {
    font-size: 1.8rem;
    font-weight: 800;
  }

  ul {
    line-height: 2.4rem;
    list-style: none;
    margin-top: 2rem;


    strong {
      font-weight: 600;
    }
  }

`;
