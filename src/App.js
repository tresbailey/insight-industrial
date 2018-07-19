import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './home.js';
import Services from './services.js';
import * as Constants from './constants.js';
import logo from './gear-logo.gif';
import './App.css';


class App extends Component {

  render() {

    	const styles = this.getStyles();
		return (
			<Router>
				<div>
					<ul style={styles.navStyle}> 
						<li>
							<Link to="/services">Services</Link>
						</li>
						<li>
							<Link to="/company">Company</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>

					<div style={styles.app}>
					  <header style={styles.appHeader}>
						<img src={logo} style={styles.appLogo} alt="logo" />
						<h1 style={styles.AppTitle}>Insight Industrial Solutions</h1>
					  </header>
					</div>

					<Route exact path="/" component={Home} />
					<Route exact path="/services" component={Services} />
					<Route path="/company" component={Company} />
					<Route path="/contact" component={Contact} />
				</div>
			</Router>
		);
  }
  getStyles = () => {
    return {
			navStyle: {
				listStyleType: 'none',
				display: 'flex',
				margin: 0,
				padding: 0,
			},

			navItem: {
				display: 'block',
			},
      appHeader: {
        margin: 0,
        padding: 0,
        fontFamily: 'Oswald, sans-serif',
      },
      app: {
        textAlign: 'center',
      },

      appLogo: {
        animation: 'App-logo-spin infinite 20s linear',
        height: '120px',
      },

      appLogoOverlay: {
        height: '40px',
      },

      appHeader: {
        backgroundColor: Constants.BASEBLUE,
        height: '250px',
        padding: '20px',
        color: 'white',
      },

      appTitle: {
        fontSize: '3.5em',
        color: Constants.BASEHCOLOR
      },

      appIntro: {
        fontSize: 'large',
      }

    }
  }
}


const Company = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
    </ul>

  </div>
);

const Contact = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;
