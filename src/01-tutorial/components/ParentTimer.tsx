import { useState } from 'react';
import Timer from './Timer'

const ParentTimer = () => {
	const [milliseconds, setMilliseconds] = useState(1000);

	return (
		<div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>Timer: useEffect - useRef</h2>

			<p>Milliseconds: { milliseconds }</p>

			<div className="field has-addons">
				<div className="control">
					<button
						className="button is-primary is-light"
						onClick={() => setMilliseconds(1000)}
						>
						1000
					</button>
				</div>

				<div className="control">
					<button
						className="button is-primary is-light"
						onClick={() => setMilliseconds(2000)}
						>
						2000
					</button>
				</div>
			</div>

			<Timer
				milliseconds={milliseconds}
				/>
		</div>
	);
}

export default ParentTimer;
