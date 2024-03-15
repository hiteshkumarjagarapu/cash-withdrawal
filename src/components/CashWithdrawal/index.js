import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  onButt = value => {
    this.setState(prev => ({count: prev.count - value}))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg1">
        <div className="bg2">
          <div className="bg3">
            <p className="para">Your Balance</p>
            <p>{count}</p>
          </div>
          <p>Withdraw</p>
          <p>CHOOSE SUM(IN RUPEES)</p>
          <ul className="bg3">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                details={each}
                less={this.onButt}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
