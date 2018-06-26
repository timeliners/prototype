import * as React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import 'jest-enzyme';

import Container from './container';

describe('modules/github-search/container', () => {
	let component;

	beforeEach(() => {
		component = mount(
			<MemoryRouter>
				<Route component={Container} />
			</MemoryRouter>
		);
	});

	it('renders intro, input and link', () => {
		expect(component.find('.github-search__intro')).toExist();
		expect(component.find('.github-search__input')).toExist();
		expect(component.find('.github-search__button')).toExist();
	});

	it('updates link when name is entered', () => {
		component.find('.github-search__input').simulate('change', { target: { value: 'githubUser' } });
		const link = component.find('.github-search__button').first();

		expect(link.props()).toMatchObject({
			className: 'github-search__button',
			to: '/githubUser',
		});
	});
});
