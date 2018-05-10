import * as React from 'react';

function GithubLink(props: { href: string, children: string }) {
	return <a href={props.href} target="_blank">{props.children}</a>;
}

interface IProps {
	events: any[],
}

export default function GithubEventsList(props: IProps) {
	return (
		<ul>
			{props.events.map((event) => (
				<li key={event.id}>
					<GithubLink href={`https://github.com/${event.actor.login}`}>
						{event.actor.display_login}
					</GithubLink>

					<span>&nbsp;- {event.type} -&nbsp;</span>

					{!!event.payload.action && <span>{event.payload.action} -&nbsp;</span>}
					{!!event.repo && (
						<GithubLink href={`https://github.com/${event.repo.name}`}>
							{event.repo.name}
						</GithubLink>
					)}

					<span>&nbsp;@ {(new Date(event.created_at)).toUTCString()}</span>
				</li>
			))}
		</ul>
	);
}

