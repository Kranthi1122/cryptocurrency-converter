// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = details
  return (
    <li>
      <div className="bitcoin">
        <img src={currencyLogo} alt="currency_name" className="image" />
        <p>{currencyName}</p>
      </div>
      <div className="bitcoin">
        <p>{usdValue}</p>
        <p className="euro">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
