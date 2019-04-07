import React, { Component } from 'react';
import calculateMonthlyRepayment from '../utils/calculate-repayment';

class CalculatorV3 extends Component {
  constructor() {
    super();
    this.state = {
      result: '',
      years: '',
      amount: '',
      rate: '',
    };
  }

  handleOnChange = (event) => {
    const propertyToUpdate = event.target.id;
    const valueToUpdate = event.target.value;
    this.setState({ [propertyToUpdate]: valueToUpdate });
  };


  handleOnSubmit = event => {
    event.preventDefault();
    const { years, amount, rate } = this.state;
    const result = calculateMonthlyRepayment(rate, years, amount);
    this.setState({ result: result });
  };

  handleOnClick = event => {
    event.preventDefault();
    this.setState({
      result: '',
      years: '',
      amount: '',
      rate: '',
    });
  };

  render() {
    const { years, amount, rate } = this.state;
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="years">Mortgage years: </label>
          <input onChange={this.handleOnChange} type="number" id="years" value={years} />
          <label htmlFor="amount">Amount borrowed: </label>
          <input onChange={this.handleOnChange} type="number" id="amount" value={amount} />
          <br />
          <label htmlFor="rate">Interest rate: </label>
          <input onChange={this.handleOnChange} type="number" id="rate" value={rate} />
          <br />
          <button type="button" onClick={this.handleOnClick}>Clear</button>
          <button type="submit">Calculate</button>
        </form>
        {this.state.result && (
          <p>This is how much your repayment will be: {this.state.result}</p>
        )}
      </div>
    );
  }
}

export default CalculatorV3;
