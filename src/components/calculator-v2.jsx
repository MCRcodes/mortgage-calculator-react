import React, { Component } from 'react';
import calculateMonthlyRepayment from '../utils/calculate-repayment';

class CalculatorV2 extends Component {
  constructor() {
    super();
    this.state = {
      result: '',
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const years = event.target.years.value;
    const amount = event.target.amount.value;
    const rate = event.target.rate.value;
    const result = calculateMonthlyRepayment(rate, years, amount);
    this.setState({ result: result });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="years">Mortgage years: </label>
          <input type="number" id="years" />
          <label htmlFor="amount">Amount borrowed: </label>
          <input type="number" id="amount" />
          <br />
          <label htmlFor="rate">Interest rate: </label>
          <input type="number" id="rate" />
          <br />
          <button type="submit">Calculate</button>
        </form>
        {this.state.result && (
          <p>This is how much your repayment will be: {this.state.result}</p>
        )}
      </div>
    );
  }
}

export default CalculatorV2;
