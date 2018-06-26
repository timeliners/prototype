import * as React from 'react';
import GithubCard from '../../components/github-card';

interface IProps {
	events: any[],
}

export default function GithubEventsList(props: IProps) {
	return (
		<div>
			{props.events.map(event => (
				<GithubCard key={event.id} {...event} />
			))}
		</div>
	);
}

