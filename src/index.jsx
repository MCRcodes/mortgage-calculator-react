import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import MortgageCalculator from './MortgageCalculator/index'

render(<MortgageCalculator interestRate={3} />, document.getElementById('root'));
