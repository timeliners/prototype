import * as React from 'react';
import GithubEventCard from '../../components/card/github-event-card';

interface IProps {
	events: any[],
}

export default function GithubEventsList(props: IProps) {
	console.log(props.events);
	return (
		<div>
			{props.events.map((event) => (
				<GithubEventCard event={event} />
			))}
		</div>
	);
}

