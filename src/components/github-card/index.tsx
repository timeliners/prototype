import * as React from 'react';
import GithubCardTypeIssue, { type as issueType } from './type-issue';
import GithubCardTypeIssueComment, { type as issueCommentType } from './type-issue-comment';
import GithubCardTypePullRequest, { type as pullRequestType } from './type-pull-request';

const components = {
	[issueType]: GithubCardTypeIssue,
	[issueCommentType]: GithubCardTypeIssueComment,
	[pullRequestType]: GithubCardTypePullRequest,
};

interface IProps {
	type: string;
	[key: string]: any;
}

export default function GithubCard(props: IProps) {
	const Component = components[props.type];

	return Component
		? <Component {...props} />
		: null;
}
