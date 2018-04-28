import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import App from './App';

describe('Component: App', () => {
	it('renders without crashing', () => {
		expect(shallow(<App />).html()).to.be.ok;
	});
});
