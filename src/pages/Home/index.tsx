import React, {useContext} from 'react'

import CountryCard from '../../components/CountryCard'
import Header from '../../components/Header'
import {Chevron, Search} from '../../assets'

import { ThemeContext } from '../../context/themeContext'

import { 
  Container, 
  Content, 
  InputContent, 
  InputBlock, 
  SelectBlock, 
  CountriesContent 
} from './styles'

const Home = () => {
  const {switchTheme, theme} = useContext(ThemeContext)

  return (
    <Container>
      <Header switchTheme={switchTheme} theme={theme} />
      <Content>
        <InputContent>
          <InputBlock>
            <Search />
            <input 
                type="text" 
                name="country" 
                id="country"
                placeholder="Search for a country..."
              />
          </InputBlock>

          <SelectBlock>
            <Chevron />
            <select>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
            </select>
          </SelectBlock>
        </InputContent>
              
        <CountriesContent>
          <CountryCard 
            country="Brasil" 
            capital="Brasília" 
            population={28.875}
            region="América Latina"
            countryImg="https://restcountries.eu/data/ala.svg"
          />
          <CountryCard 
            country="Brasil" 
            capital="Brasília" 
            population={28.875}
            region="América Latina"
            countryImg="https://restcountries.eu/data/ala.svg"
          />
          <CountryCard 
            country="Brasil" 
            capital="Brasília" 
            population={28.875}
            region="América Latina"
            countryImg="https://restcountries.eu/data/ala.svg"
          />
          <CountryCard 
            country="Brasil" 
            capital="Brasília" 
            population={28.875}
            region="América Latina"
            countryImg="https://restcountries.eu/data/ala.svg"
          />
          <CountryCard 
            country="Brasil" 
            capital="Brasília" 
            population={28.875}
            region="América Latina"
            countryImg="https://restcountries.eu/data/ala.svg"
          />
          <CountryCard 
            country="Brasil" 
            capital="Brasília" 
            population={28.875}
            region="América Latina"
            countryImg="https://restcountries.eu/data/ala.svg"
          />
          <CountryCard 
            country="Brasil" 
            capital="Brasília" 
            population={28.875}
            region="América Latina"
            countryImg="https://restcountries.eu/data/ala.svg"
          />
          <CountryCard 
            country="Brasil" 
            capital="Brasília" 
            population={28.875}
            region="América Latina"
            countryImg="https://restcountries.eu/data/ala.svg"
          />
          <CountryCard 
            country="Brasil" 
            capital="Brasília" 
            population={28.875}
            region="América Latina"
            countryImg="https://restcountries.eu/data/ala.svg"
          /><CountryCard 
          country="Brasil" 
          capital="Brasília" 
          population={28.875}
          region="América Latina"
          countryImg="https://restcountries.eu/data/ala.svg"
        />
        <CountryCard 
            country="Brasil" 
            capital="Brasília" 
            population={28.875}
            region="América Latina"
            countryImg="https://restcountries.eu/data/ala.svg"
          />
        </CountriesContent>
      </Content>
    </Container>
  )
}

export default Home;