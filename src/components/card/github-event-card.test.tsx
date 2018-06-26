import React from 'react';
import { shallow } from 'enzyme';

import GithubEventCard, { titles } from './github-event-card';

describe('components/card/github-event-card', () => {
	it('renders formatted timestamp', () => {
		const githubEvent = {
			created_at: '2018-06-25T20:32:56Z',
			repo: { name: 'test' },
			type: 'test',
		};

		shallow(<GithubEventCard event={githubEvent} />).contains('2018-06-25');
	});

	it('renders event type titles', () => {
		Object.keys(titles).forEach((value) => {
			const githubEvent = {
				created_at: '2018-06-25T20:32:56Z',
				repo: { name: 'test' },
				type: value,
			};

			shallow(<GithubEventCard event={githubEvent} />).contains(titles[value]);
		});
	});

	it('renders unknown event type title', () => {
		const githubEvent = {
			created_at: '2018-06-25T20:32:56Z',
			repo: { name: 'test' },
			type: 'unknown',
		};

		shallow(<GithubEventCard event={githubEvent} />).contains('unknown');
	});

	it('renders repository name', () => {
		const githubEvent = {
			created_at: '2018-06-25T20:32:56Z',
			repo: { name: 'My repo' },
			type: 'test',
		};

		shallow(<GithubEventCard event={githubEvent} />).contains('My repo');
	});
});
