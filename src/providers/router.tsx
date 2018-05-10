import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GithubEvents from '../modules/github-events';

export default function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={GithubEvents} />
			</Switch>
		</BrowserRouter>
	);
}
