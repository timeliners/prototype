import * as React from 'react';
import moment from 'moment';
import './card.css';

export function formatTimestamp(timestamp: string) {
	return moment(timestamp).format('YYYY-MM-DD');
}

export const titles = {
	CreateEvent: 'Created branch',
	DeleteEvent: 'Deleted branch',
	IssueCommentEvent: 'Commented',
	IssuesEvent: 'Created issue',
	PullRequestEvent: 'Request changes',
	PushEvent: 'Pushed update',
	ReleaseEvent: 'Released version',
};

export interface IProps {
	title: string;
	subtitle: string;
	timestamp: string;
}

export default function Card(props: IProps) {
	return (
		<div className="Card">
			<h1>{titles[props.title] || props.title}</h1>
			<h2>{props.subtitle}</h2>
			<p>{formatTimestamp(props.timestamp)}</p>
		</div>
	);
}
