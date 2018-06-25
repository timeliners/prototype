import * as React from 'react';
import moment from 'moment';
import Card from './card';

export const titles = {
	CreateEvent: 'Created branch',
	DeleteEvent: 'Deleted branch',
	IssueCommentEvent: 'Commented',
	IssuesEvent: 'Created issue',
	PullRequestEvent: 'Requested change',
	PushEvent: 'Pushed update',
	ReleaseEvent: 'Released version',
};

export function formatTimestamp(timestamp: string) {
	return moment(timestamp).format('YYYY-MM-DD');
}

export interface IProps {
	event: any;
}

export default function GithubEventCard(props: IProps) {
	return (
		<Card
			title={titles[props.event.type] || props.event.type}
			subtitle={props.event.repo.name}
			timestamp={formatTimestamp(props.event.created_at)}
		/>
	);
}



