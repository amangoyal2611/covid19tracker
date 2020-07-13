import React, { Component } from 'react';
import styles from './App.module.css';

import { Cards, CountryPicker, Chart } from './components'
import { fetchData } from './api'

class App extends Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const globalData = await fetchData()
    this.setState({ data: globalData });
  }

  countryChangedHandler = async(country) => {
    console.log(country);

    const countryData = await fetchData(country);
    this.setState({ data: countryData, country: country });
  }

  render() {
    return (
      <div className={styles.container}>

        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.countryChangedHandler} />

        <Chart data={this.state.data} country={this.state.country} />

      </div>
    );
  }
}

export default App;
