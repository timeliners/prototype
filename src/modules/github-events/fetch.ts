interface IOptions {
	/** The paginated page to fetch, should default to 1 */
	page?: number;
}

/**
 * Fetch a list of all public events from a GitHub username.
 */
export default function fetchGithubEvents(username: string, options?: IOptions) {
	const page = (options && options.page) || 1;

	return fetch(`https://api.github.com/users/${username}/events/public?page=${page}`)
		.then(response => response.json());
};
