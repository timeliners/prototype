import * as React from 'react';
import Card from '../card';

const titles = {
	closed: 'Closed pull request',
	edited: 'Edited pull request',
	opened: 'Opened pull request',
	reopened: 'Reopened issue',
}

interface IProps {
	repo: { name: string };
	payload: {
		action: string;
		pull_request: { created_at: string };
	};
}

export const type = 'PullRequestEvent';

export default function GithubCardTypeIssue(props: IProps) {
	if (!titles[props.payload.action]) {
		return null;
	}

	return (
		<Card
			title={titles[props.payload.action]}
			subtitle={props.repo.name}
			timestamp={props.payload.pull_request.created_at}
		/>
	);
}
