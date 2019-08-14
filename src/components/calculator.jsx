import React, { Component } from 'react';
import calculateMonthlyRepayment from '../utils/calculate-repayment';

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
     console.log(this.state);
     const { years, rate, principal } = this.state;
     return (
       <div>
         <form onSubmit={this.handleOnSubmit}>
           <div>
                Rate:
            <input type="number" onChange={this.handleRate} value={rate} />
          </div>
           <div>
                  Years:
            <input type="number" onChange={this.handleYears} value={years} />
          </div>
           <div>
                  Borrowing ammount:
            <input type="number" onChange={this.handlePrincipal} value={principal} />
          </div>
           <button type="submit">Calculate</button>
           <button type="button" onClick={this.handleClear}>Clear</button>
         </form>
         <p>Your monthly repayment is: {this.state.repayment}</p>
       </div>
     );
   }
}


export default App;
