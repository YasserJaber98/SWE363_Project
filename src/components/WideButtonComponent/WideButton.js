import React, { Component } from 'react';
import './wideButton.css';

class WideButton extends Component {
	render() {
		return (
			<div className="button-container">
				<button className="wide-button">{this.props.buttonTitle}</button>
			</div>
		);
	}
}
export default WideButton;
