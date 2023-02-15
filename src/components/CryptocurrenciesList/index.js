// Write your JS code here
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrencyList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getdetails()
  }

  getdetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const list = data.map(eachList => ({
      currencyLogo: eachList.currency_logo,
      currencyName: eachList.currency_name,
      euroValue: eachList.euro_value,
      id: eachList.id,
      usdValue: eachList.usd_value,
    }))
    this.setState({currencyList: list, isLoading: false})
  }

  render() {
    const {isLoading, currencyList} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <>
            <div>
              <div>
                <h1>Cryptocurrency Tracker</h1>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                  alt="cryptocurrency"
                />
              </div>
              <div className="big">
                <div className="small">
                  <p>Coin TyPE</p>
                  <div className="pk">
                    <p>USD</p>
                    <p>Euro</p>
                  </div>
                </div>
                <ul>
                  {currencyList.map(eachItem => (
                    <CryptocurrencyItem details={eachItem} key={eachItem.id} />
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </>
    )
  }
}
export default CryptocurrencyList
