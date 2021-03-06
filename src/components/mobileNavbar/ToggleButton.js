import React from 'react';
import './ToggleButton.css';
import './MobileNavbar';

const ToggleButton = (props) => (
	<button className="toggle" onClick={props.click}>
		<div className="topLine" />
		<div className="middleLine" />
		<div className="bottomLine" />
	</button>
);

export default ToggleButton;
