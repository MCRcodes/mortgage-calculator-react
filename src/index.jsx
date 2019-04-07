import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import Calculator from './components/calcultor';

render(<Calculator />, document.getElementById('root'));
