import React, { Component } from 'react';
import calculateMonthlyRepayment from '../utils/calculate-repayment';
import InputField from './input-field';
import Button from './button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      years: '',
      rate: '',
      principal: '',
      repayment: '',
    };
  }

  handleRate = (event) => {
    const newState = {
      rate: Number(event.target.value),
    };
    this.setState(newState);
  };

  handleYears = (event) => {
    this.setState({ years: Number(event.target.value) });
  };

  handlePrincipal = (event) => {
    this.setState({ principal: Number(event.target.value) });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { years, rate, principal } = this.state;
    const repayment = calculateMonthlyRepayment(rate, years, principal);

    this.setState({ repayment });
  };

  handleClear = () => {
    this.setState({
      years: '',
      rate: '',
      principal: '',
      repayment: '',
    });
  };

  render() {
    const {
      years, rate, principal, repayment,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <InputField
            label="Rate"
            type="number"
            handleOnChange={this.handleRate}
            value={rate}
          />
          <InputField
            label="Years"
            type="number"
            handleOnChange={this.handleYears}
            value={years}
          />
          <InputField
            label="Borrowing ammount"
            type="number"
            handleOnChange={this.handlePrincipal}
            value={principal}
          />
          <Button
            type="submit"
            label="Calculate"
          />
          <Button
            type="button"
            handleOnclick={this.handleClear}
            label="Clear"
          />
        </form>
        <p>Your monthly repayment is: {repayment}</p>
      </div>
    );
  }
}


export default App;
