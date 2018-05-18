import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import fetchGithubEvents from './fetch';
import GithubEventsList from './list';
import './container.css';

type ResponseStatus = 'pending' | 'fulfilled' | 'rejected';

interface IRouterParams {
	/** The GitHub username to load all events for */
	username: string;
}

interface IProps extends RouteComponentProps<IRouterParams> {}

interface IState {
	/** The fetched list of GitHub events. */
	events: any[],
	/** The pagination page of the last fetch request. */
	page: number;
	/** The status of the last fetch request. */
	status: ResponseStatus;
}

export default class GithubEventsContainer extends React.Component<IProps, IState> {
	/**
	 * @inheritdoc
	 */
	public state = {
		events: [] as any[],
		page: 1,
		status: 'pending' as ResponseStatus,
	};

	/**
	 * Fetch the GitHub events for the requested username.
	 */
	private fetchGithubEvents = (page = 1) => {
		this.setState({ page, status: 'pending' });

		return fetchGithubEvents(this.props.match.params.username, { page })
			.then(response => this.setState({
				events: this.state.events.concat(response),
				status: 'fulfilled',
			}))
			.catch((error) => {
				this.setState({ status: 'rejected' });
			});
	};

	/**
	 * Invoked when the request failed and the user wants to try again.
	 */
	private onRefreshClick = () => window.location.reload(true);

	/**
	 * Determine if there are more GitHub events available to fetch.
	 */
	public hasMoreEvents = () => {
		const PaginationLimit = 30;
		const { page, events } = this.state;

		return events.length >= page * PaginationLimit;
	};

	/**
	 * Invoked when the user want's to load more data from the GitHub API.
	 */
	private onNextPageClick = () => {
		if (this.hasMoreEvents()) {
			this.fetchGithubEvents(this.state.page + 1);
		} else {
			alert('You reached the end of the events.');
		}
	};

	/**
	 * When the component is mounted, fetch the GitHub events.
	 */
	public componentDidMount() {
		this.fetchGithubEvents();
	}

	/**
	 * When the username is changed, reset the state to not mixup the user's events.
	 */
	public componentDidUpdate(prevProps: IProps) {
		if (this.props.match.params.username !== prevProps.match.params.username) {
			this.setState({ events: [] as any[] });
			this.fetchGithubEvents();
		}
	}

	/**
	 * Render the header of the GitHub events list.
	 */
	public renderHeader() {
		const { status, events } = this.state;
		const { username } = this.props.match.params;

		switch (status) {
			case 'rejected':
				return (
					<div>
						<p>{`Oops... Something went wrong fetching events for ${username}`}</p>
						<a onClick={this.onRefreshClick}>Click here to try again</a>
						<Link to='/'>or to try another username</Link>
					</div>
				);

			case 'fulfilled':
				const content = this.hasMoreEvents()
					? `Found at least ${events.length} events`
					: `Found ${events.length} events`;

				return (
					<div>
						<p>{`${content} for ${username}`}</p>
						<Link to='/'><div className="Button">back</div></Link>
					</div>
				);

			case 'pending':
				return (
					<div>
						<p>{`Loading the events for ${username}`}</p>
						<Link to='/'><div className="Button">back</div></Link>
					</div>
				);
		}
	}

	/**
	 * @inheritdoc
	 */
	public render() {
		return (
				<div>
					{this.renderHeader()}
					<GithubEventsList events={this.state.events} />
						{this.hasMoreEvents() && <button onClick={this.onNextPageClick} className="Button">load<br />more</button>}
				</div>
		);
	}
}
