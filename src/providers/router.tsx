import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GithubSearch from '../modules/github-search';
import GithubEvents from '../modules/github-events';

export default function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/:username' component={GithubEvents} />
				<Route exact path='/' component={GithubSearch} />
			</Switch>
		</BrowserRouter>
	);
}
