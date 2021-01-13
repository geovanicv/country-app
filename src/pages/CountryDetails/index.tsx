import React, { useContext } from 'react'
import Header from '../../components/Header'
import { ThemeContext } from '../../context/themeContext'

import {
  Container, 
  Content, 
  Country, 
  CountryImg, 
  CountryInfos, 
  CountryInfosList,
  BorderCountries
} from './styles'

const CountryDetails = () => {
  const {switchTheme, theme} = useContext(ThemeContext)

  return(
    <Container>
      <Header switchTheme={switchTheme} theme={theme} />

      

      <Content>
        <Country>
          <CountryImg src="https://restcountries.eu/data/bra.svg" alt="Brasil"/>

          <CountryInfos>
            <h2>Brasil</h2>
            <CountryInfosList>
              <ul>
                <li>
                  <strong>Native Name:</strong> Brasil
                </li>
                <li>
                  <strong>Population:</strong> 2,886,026
                </li>
                <li>
                  <strong>Region:</strong> America
                </li>
                <li>
                  <strong>Sub Region:</strong> South America
                </li>
                <li>
                  <strong>Capital:</strong> Brasília
                </li>
              </ul>

              <ul>
                <li>
                  <strong>Top Level Domain:</strong> Br
                </li>
                <li>
                  <strong>Currencies:</strong> Brazilian real
                </li>
                <li>
                  <strong>Languages:</strong> Portuguese
                </li>
              </ul>
            </CountryInfosList>
            <BorderCountries>
              <strong>Border Countries:</strong>
              <button>Argentina</button>
              <button>Argentina</button>
              <button>Argentina</button>
              <button>Argentina</button>
              <button>Argentina</button>
              <button>Argentina</button>
              <button>Argentina</button>
              <button>Argentina</button>
              <button>Argentina</button>
            </BorderCountries>
          </CountryInfos>
        </Country>
      </Content>
    </Container>
  )

}

export default CountryDetails