import React, { Component } from 'react';
import styles from './App.module.css';

import { Cards, CountryPicker, Chart } from './components'
import { fetchData } from './api'

class App extends Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    const data = await fetchData()
    this.setState({ data: data });
  }

  render() {
    return (
      <div className={styles.container}>

        <Cards data={this.state.data} />
        <CountryPicker />
       
        <Chart />

      </div>
    );
  }
}

export default App;
