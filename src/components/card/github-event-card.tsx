import * as React from 'react';
import Card from './card';


export interface IProps {
	event: any;
}

export default function GithubEventCard(props: IProps) {
	return (
		<Card
			title={props.event.type}
			subtitle={props.event.repo.name}
			timestamp={props.event.created_at}
		/>
	);
}



