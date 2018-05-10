import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

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
	 * Invoked when the user submits the GitHub username.
	 * When this happens, the user should be redirected to a page with all the events of this account.
	 */
	private onFormSubmit = (event: React.FormEvent<{}>) => {
		event.preventDefault();

		if (this.state.username) {
			this.props.history.push(`/${this.state.username}`);
		}
	};

	/**
	 * Invoked when the user changes the (GitHub) username input.
	 */
	private onUsernameChange = (event: React.FormEvent<HTMLInputElement>) => {
		this.setState({ username: event.currentTarget.value });
	};

	/**
	 * @inheritdoc
	 */
	public render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<p>Enter the exact GitHub username of the person you are looking for</p>
					<input
						type='text'
						name='username'
						value={this.state.username}
						onChange={this.onUsernameChange}
					/>
				</form>
			</div>
		);
	}
}
