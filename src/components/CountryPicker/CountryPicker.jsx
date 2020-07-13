import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api'

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setFetchedCountries(await fetchCountries())
        }

        fetchData();
    }, [setFetchedCountries]);


    let options = fetchedCountries.map((country, index) => {
        return <option key={index} value={country}>{country}</option>
    })

    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue='' onChange={(event) => handleCountryChange(event.target.value)}>
                <option value="global">Global</option>
                    {options}
                </NativeSelect>
            </FormControl>
        </div>
    );
}

export default CountryPicker;