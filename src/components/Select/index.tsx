import { useState } from 'react';

import AsyncSelect from 'react-select/async';

import {api} from '../../services/api';

const Select = () =>  {
    const [selectedCountry, setSelectedCountry] = useState('');

    async function fetchData(inputValue: string) {
        const countries = await api.get('all').then(response => response.data);
        const countriesMapped = dataToValuesAndLabels(countries);
        const filteredCountries = filterCountries(inputValue, countriesMapped);
        
        return filteredCountries;
    }

    const dataToValuesAndLabels = (countries) => {
        return countries.map(country => {
            return {
                value: country.name,
                label: country.translations.br,
            };
        });
    }

    const filterCountries = (inputValue: string, data) => {
        return data.filter((i) =>
          i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
      };
      

    const handleSelectCountry = (value) => {
       setSelectedCountry(value);
    }
      
    return (
      <AsyncSelect cacheOptions loadOptions={fetchData} onChange={handleSelectCountry} />
    );
}

export default Select;