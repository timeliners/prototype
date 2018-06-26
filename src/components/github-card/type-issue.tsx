import * as React from 'react';
import Card from '../card';

const titles = {
	closed: 'Closed issue',
	edited: 'Edited issue',
	opened: 'Opened issue',
	reopened: 'Reopened issue',
}

interface IProps {
	repo: { name: string };
	payload: {
		action: string;
		issue: { created_at: string };
	};
}

export const type = 'IssuesEvent';

export default function GithubCardTypeIssue(props: IProps) {
	if (!titles[props.payload.action]) {
		return null;
	}

	return (
		<Card
			title={titles[props.payload.action]}
			subtitle={props.repo.name}
			timestamp={props.payload.issue.created_at}
		/>
	);
}
