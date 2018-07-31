import React from 'react';
import calculateMonthlyRepayment from './utils/index';

class MortgageCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interestRate: props.interestRate,
      repaymentPeriod: 20,
      amountToBorrow: 100000,
      monthlyRepayment: 555
    };
  }

  updateStateField(name, value) {
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <span> Interest Rate:</span>
        <input
          value={this.state.interestRate}
          onChange={event =>
            this.updateStateField('interestRate', event.target.value)
          }
        />
        <br />
        <span>Repayment Period:</span>
        <input
          value={this.state.repaymentPeriod}
          onChange={event =>
            this.updateStateField('repaymentPeriod', event.target.value)
          }
        />
        <br />
        <span>Amount to borrow:</span>
        <input
          value={this.state.amountToBorrow}
          onChange={event =>
            this.updateStateField('amountToBorrow', event.target.value)
          }
        />
        <br />
        <button onClick={() => {
         const { interestRate, repaymentPeriod, amountToBorrow } = this.state;
         const monthlyRepayment = calculateMonthlyRepayment(interestRate, repaymentPeriod, amountToBorrow);
         this.setState({ monthlyRepayment })
        }}>Calculate</button>
        <br />
        <span>Monthly Repayment: £{this.state.monthlyRepayment}</span>
      </div>
    );
  }
}

export default MortgageCalculator;
