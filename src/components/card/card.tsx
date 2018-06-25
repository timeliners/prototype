import * as React from 'react';
import './card.css';

export interface IProps {
	title: string;
	subtitle: string;
	timestamp: string;
}

export default function Card(props: IProps) {
	return (
		<div className="Card">
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
			<p>{props.timestamp}</p>
		</div>
	);
}



