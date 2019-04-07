import React, { Component } from 'react';
import calculateMonthlyRepayment from '../utils/calculate-repayment';


class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      years: 0,
      amount: 0,
      interest: 0,
      result: 0,
    };
  }

  handleOnChangeYears = (event) => {
    this.setState({ years: event.target.value });
  };

  handleOnChangeValue = (event) => {
    this.setState({ amount: event.target.value });
  };

  handleOnChangeInterest = (event) => {
    this.setState({ interest: event.target.value });
  };

  handleOnClick = (event) => {
    event.preventDefault();
    const { years, amount, interest } = this.state;
    const result = calculateMonthlyRepayment(interest, years, amount);
    this.setState({ result: result });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="years">Mortgage years: </label>
          <input onChange={this.handleOnChangeYears} type="number" id="years" />
          <label htmlFor="amount">Amount borrowed: </label>
          <input onChange={this.handleOnChangeValue} type="number" id="amount" />
          <br />
          <label htmlFor="rate">Interest rate: </label>
          <input onChange={this.handleOnChangeInterest} type="number" id="rate" />
          <br />
          <button onClick={this.handleOnClick} type="submit">Calculate</button>
        </form>
        <p>This is the mortgage years you chose: {this.state.years}</p>
        <p>This is the amount you want: {this.state.amount}</p>
        <p>This is the interest you chose: {this.state.interest}</p>
        <p>This is how much your repayment will be: {this.state.result}</p>
      </div>
    );
  }
}


export default Calculator;
