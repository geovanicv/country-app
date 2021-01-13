import React from 'react';

import { Container, CountryImg, CountryInfo } from './styles';

type ICountryCardProps = {
    countryImg: string;
    country: string;
    population: number;
    region: string;
    capital: string;
}

const CountryCard = ({
  countryImg, 
  capital, 
  country, 
  population, 
  region
}: ICountryCardProps) => {
  return (
      <Container>
          <CountryImg src={countryImg} alt={`Bandeira do país ${country}`}/>
          <CountryInfo>
            <strong>{country}</strong>
            <ul>
              <li>
                <strong>População: </strong>
                {population}
              </li>
              <li>
                <strong>Região: </strong>
                {region}
              </li>
              <li>
                <strong>Capital: </strong>
                {capital}
              </li>
            </ul>
          </CountryInfo>
      </Container>
  )
}

export default CountryCard;