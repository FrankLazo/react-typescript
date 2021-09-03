import { useState } from 'react';

interface UserInfo {
	id: string;
	name: string;
}

const initialUser: UserInfo = {
	id: 'xyz789',
	name: 'User',
}

const User = () => {
	const [user, setUser] = useState<UserInfo>(initialUser);

	const login = () => {
		setUser({
			id: 'abc123',
			name: 'Frank',
		});
	}

	return (
		<div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>User: useState</h2>

			<div className="control">
				<button
					className="button is-primary"
					onClick={login}
					>
					Login
				</button>
			</div>

			<pre> { JSON.stringify(user, null, 2) } </pre>
		</div>
	);
}

export default User;
