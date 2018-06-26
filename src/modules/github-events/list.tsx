import * as React from 'react';
import GithubEventCard from '../../components/card/github-event-card';

interface IProps {
	events: any[],
}

export default function GithubEventsList(props: IProps) {
	return (
		<div>
			{props.events.map((event) => (
				<GithubEventCard event={event} />
			))}
		</div>
	);
}

