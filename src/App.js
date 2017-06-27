import React, { Component } from 'react';
import { SelectCurrency } from './Components/SelectCurrency.js';
import { InputForm } from './Components/InputForm.js';
import './App.css';

class App extends Component {

  render() {

      return (
          <div style={{textAlign: 'center'}}>
             <SelectCurrency />
              <SelectCurrency />
              <InputForm/>
          </div>
      );
  }
}

export default App;