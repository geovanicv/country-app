import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.elements};
  width: 100vw;
  height: 72px;
  color: ${props => props.theme.colors.text};
  box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.16);
`;

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  
`;

export const ThemeSwitch = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: 0;
  outline: 0;
    
  svg {
    width: 18px;
    margin-right: 8px;
    stroke: ${props => props.theme.colors.text};

  }

 

`;
