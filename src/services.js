import React, { Component } from 'react';
import './Services.css';
import pplant from './images/power-plant.jpg';

class Services extends Component {
  render() {
    const styles = this.getStyles();
    return (
    	<div style={styles.majorDescriptionPanel}>
				<ul id="grid" className="clear">
					<li>
						<div class="hexagon"></div>
					</li>
					<li>
						<div class="hexagon"></div>
					</li>
					<li>
						<div class="hexagon"></div>
					</li>
					<li>
						<div class="hexagon"></div>
					</li>
					<li>
						<div class="hexagon"></div>
					</li>
					<li>
						<div class="hexagon"></div>
					</li>
					<li>
						<div class="hexagon"></div>
					</li>
					<li>
						<div class="hexagon"></div>
					</li>
					<li>
						<div class="hexagon"></div>
					</li>
				</ul>
				<div style={styles.majorDescription}>
          	  We buy and sell all types of Surplus asset recovery equipment and machinery such as Manufacturing Equipment, Refining Equipment, Processing Equipment, Electrical Equipment, and Industrial Equipment along with all other Surplus Inventory Equipment available.
			</div>
        </div>
    );
  }

  getStyles = () => {
    return {
		majorDescriptionPanel: {
		  display: 'flex',
		  flexDirection: 'row',
		  margin: '2rem',
		},
		majorDescription: {
		  padding: '1rem',
		},	
		ServiceImg: {
		}	
    };
  }
}

export default Services;
