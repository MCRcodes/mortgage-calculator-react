import React, { Component } from 'react';
import calculateMonthlyRepayment from '../utils/calculate-repayment';


class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      years: 0,
      amount: 0,
      rate: 0,
      result: 0,
    };
  }

  handleOnChange = (event) => {
    const propertyToUpdate = event.target.id;
    const valueToUpdate = event.target.value;
    this.setState({ [propertyToUpdate]: valueToUpdate });
  };


  handleOnClick = (event) => {
    event.preventDefault();
    const { years, amount, rate } = this.state;
    const result = calculateMonthlyRepayment(rate, years, amount);
    this.setState({ result: result });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="years">Mortgage years: </label>
          <input onChange={this.handleOnChange} type="number" id="years" />
          <label htmlFor="amount">Amount borrowed: </label>
          <input onChange={this.handleOnChange} type="number" id="amount" />
          <br />
          <label htmlFor="rate">Interest rate: </label>
          <input onChange={this.handleOnChange} type="number" id="rate" />
          <br />
          <button onClick={this.handleOnClick} type="submit">Calculate</button>
        </form>
        <p>This is the mortgage years you chose: {this.state.years}</p>
        <p>This is the amount you want: {this.state.amount}</p>
        <p>This is the interest you chose: {this.state.rate}</p>
        <p>This is how much your repayment will be: {this.state.result}</p>
      </div>
    );
  }
}


export default Calculator;
