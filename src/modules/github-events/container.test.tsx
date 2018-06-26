import * as React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import 'jest-enzyme';

import Container from './container';

// describe('modules/github-search/container', () => {
// 	const render = (username: string, props: any = {}) => mount(
// 		<MemoryRouter initialEntries={[`/${username}`]}>
// 			<Route render={routeProps => <Container {...routeProps} {...props} />} />
// 		</MemoryRouter>
// 	);

// 	it('fetches the github ', async () => {
// 		const mock = jest.fn();

// 		render('bycedric', { fetchGithubEventsAction: mock }).update();
// 		expect(mock).toBeCalledWith('bycedric');
// 	});
// });
