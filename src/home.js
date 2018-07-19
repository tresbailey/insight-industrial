import React, { Component } from 'react';
import * as Constants from './constants.js';
import logo from './gear-logo.gif';
import './App.css';

class Home extends Component {
  render() {
    const styles = this.getStyles();
    return (
      <div>
          We buy and sell all types of Surplus asset recovery equipment and machinery such as Manufacturing Equipment, Refining Equipment, Processing Equipment, Electrical Equipment, and Industrial Equipment along with all other Surplus Inventory Equipment available.
      </div>
    );
  }

  getStyles = () => {
    return {
    }
  }
}

export default Home;

