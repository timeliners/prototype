/* tslint:disable */
import * as React from 'react';
import { mount } from 'enzyme';
import { defineFeature, loadFeature } from 'jest-cucumber';

import GithubCard from './index';

const feature = loadFeature(__dirname + '/index.feature');

defineFeature(feature, (test) => {
	// state is an object to allow pass-by-references,
	// without this the data between given, when and then isn't properly shared
	const state = {
		card: undefined as any,
		event: {
			type: '',
			repo: { name: '' },
		},
	};

	const givenEventType = (given) => {
		given(/event of type (.*)$/, (type) => {
			state.event.type = type;
		});
	};

	const givenEventRepository = (given) => {
		given(/repository named (.*)$/, (name) => {
			state.event.repo.name = name;
		});
	};

	const whenRenderCard = (when, payload = {}) => {
		when(/render the card/, () => {
			state.card = mount(<GithubCard {...state.event} payload={payload} />);
		});
	};

	const thenCardTitleShouldBe = (then) => {
		then(/card title should be (.*)$/, (text) => {
			expect(state.card.find('.card__title').text()).toBe(text);
		});
	};

	const thenCardSubtitleShouldBe = (then) => {
		then(/card subtitle should be (.*)$/, (text) => {
			expect(state.card.find('.card__subtitle').text()).toBe(text);
		});
	};

	test('Render issue openend', ({ given, when, then }) => {
		givenEventType(given);
		givenEventRepository(given);

		whenRenderCard(when, {
			action: 'opened',
			issue: { created_at: '2018-06-26T21:27:01.679Z' },
		});

		thenCardTitleShouldBe(then);
		thenCardSubtitleShouldBe(then);
	});

	test('Render issue comment created', ({ given, when, then }) => {
		givenEventType(given);
		givenEventRepository(given);

		whenRenderCard(when, {
			action: 'created',
			comment: { created_at: '2018-06-26T21:27:01.679Z' },
		});

		thenCardTitleShouldBe(then);
		thenCardSubtitleShouldBe(then);
	});

	test('Render pull request opened', ({ given, when, then }) => {
		givenEventType(given);
		givenEventRepository(given);

		whenRenderCard(when, {
			action: 'opened',
			pull_request: { created_at: '2018-06-26T21:27:01.679Z' },
		});

		thenCardTitleShouldBe(then);
		thenCardSubtitleShouldBe(then);
	});
});
