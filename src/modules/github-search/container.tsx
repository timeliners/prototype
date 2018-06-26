import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import classnames from 'classnames';
import './container.css';

interface IState {
	/** The username to search for */
	username: string;
};

export default class GithubSearchContainer extends React.Component<RouteComponentProps<{}>, IState> {
	/**
	 * @inheritdoc
	 */
	public state = {
		username: '',
	};

	/**
	 * Invoked when the user changes the input content.
	 */
	private onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ username: event.target.value });
	}

	/**
	 * Get the full class name of the button.
	 */
	private get buttonClassName() {
		return classnames('github-search__button', {
			'-state-disabled': this.state.username.length <= 0,
		});
	}

	/**
	 * @inheritdoc
	 */
	public render() {
		return (
			<div className="github-search">
				<p className="github-search__intro">
					Enter the exact GitHub username of the person you are looking for
				</p>
				<input type="text" className="github-search__input" onChange={this.onInputChange} />
				<Link className={this.buttonClassName} to={`/${this.state.username}`}>
					see events!
				</Link>
			</div>
		);
	}
}
