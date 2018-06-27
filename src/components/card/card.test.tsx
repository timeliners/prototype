import * as React from 'react';
import { shallow } from 'enzyme';

import Card from './card';

describe('components/card/card', () => {
	it('renders title, subtitle and timestamp', () => {
		const component = shallow(
			<Card
				title='Interesting title'
				subtitle='Awesome subtitle'
				timestamp='now'
			/>
		);

		component.contains('Interesting title');
		component.contains('Awesome subtitle');
		component.contains('now');
	});

	it('renders formatted timestamp with iso timestmaps', () => {
		const component = shallow(
			<Card
				title='My title'
				subtitle='My subtitle'
				timestamp='2018-06-27T00:04:09.075Z'
			/>
		);

		component.contains('2018-06-27');
	});
});
