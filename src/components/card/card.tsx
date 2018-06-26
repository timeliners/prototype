import * as React from 'react';
import moment from 'moment';
import './card.css';

export interface IProps {
	title: string;
	subtitle: string;
	timestamp: string;
}

export default function Card(props: IProps) {
	const parsed = moment(props.timestamp);
	let timestamp = props.timestamp;

	if (parsed.isValid()) {
		timestamp = parsed.format('YYYY-MM-DD');
	}

	return (
		<div className="card">
			<h1 className="card__title">{props.title}</h1>
			<h2 className="card__subtitle">{props.subtitle}</h2>
			<time className="card__timestamp" dateTime={props.timestamp}>
				{timestamp}
			</time>
		</div>
	);
}
