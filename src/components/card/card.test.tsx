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

		expect(component.contains('Interesting title')).toBeTruthy();
		expect(component.contains('Awesome subtitle')).toBeTruthy();
		expect(component.contains('now')).toBeTruthy();
	});

	it('renders title, subtitle and timestamp with proper class names', () => {
		const component = shallow(
			<Card
				title='Interesting title'
				subtitle='Awesome subtitle'
				timestamp='now'
			/>
		);

		expect(component.find('h1').hasClass('card__title')).toBeTruthy();
		expect(component.find('h2').hasClass('card__subtitle')).toBeTruthy();
		expect(component.find('time').hasClass('card__timestamp')).toBeTruthy();
	});

	it('renders formatted timestamp with iso timestmaps', () => {
		const component = shallow(
			<Card
				title='My title'
				subtitle='My subtitle'
				timestamp='2018-06-27T00:04:09.075Z'
			/>
		);

		expect(component.contains('2018-06-27')).toBeTruthy();
		expect(component.find('time').prop('dateTime')).toBe('2018-06-27T00:04:09.075Z');
	});
});
