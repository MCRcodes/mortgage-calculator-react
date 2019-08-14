import React, { Component } from 'react';
import calculateMonthlyRepayment from '../utils/calculate-repayment';
import InputField from './input-field';
import Button from './button';
import config from './config';

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
     return (
       <div>
         <form onSubmit={this.handleOnSubmit}>
           {
            config.inputs.map(input => (
              <InputField
                key={input.label}
                label={input.label}
                type={input.type}
                handleOnChange={this[input.handleOnChange]}
                value={this.state[input.value]}
              />
            ))
          }
           {
            config.buttons.map(button => (
              <Button
                key={button.label}
                type={button.type}
                label={button.label}
                handleOnclick={this[button.handleOnClick]}
              />
            ))
          }
         </form>
         <p>Your monthly repayment is: {this.state.repayment}</p>
       </div>
     );
   }
}


export default App;
