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
});
