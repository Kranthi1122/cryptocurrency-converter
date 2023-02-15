// Write your code here

import {Component} from 'react'

import './index.css'

import CryptocurrencyList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="main">
        <CryptocurrencyList />
      </div>
    )
  }
}

export default CryptocurrencyTracker
