import * as React from 'react';
import Card from '../card';

const titles = {
	created: 'Created comment',
	deleted: 'Deleted comment',
	edited: 'Updated comment',
}

interface IProps {
	repo: { name: string };
	payload: {
		action: string;
		comment: { created_at: string };
	};
}

export const type = 'IssueCommentEvent';

export default function GithubCardTypeIssueComment(props: IProps) {
	return (
		<Card
			title={titles[props.payload.action]}
			subtitle={props.repo.name}
			timestamp={props.payload.comment.created_at}
		/>
	);
}
