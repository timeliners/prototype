import * as React from 'react';
import './app.css';
import Card from '../card';
import logo from '../../logo.svg';

export default function App() {
	return (
		<div className="App">
			<img src={logo} className="Profilepicture" alt="username" />
			<Card />
		</div>
	);
}
