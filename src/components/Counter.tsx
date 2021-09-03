import { useState } from 'react';

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const increment = (increment: number = 1):void => {
		setCounter(counter + increment);
	}

	return (
		<div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>Counter: useState</h2>

			<p className="is-size-4">
				Value: <span className="has-text-primary is-size-3">{counter}</span>
			</p>

			<div className="field has-addons">
				<div className="control">
					<button
						className="button is-primary"
						onClick={() => increment()}
						>
						Increment +1
					</button>
				</div>

				<div className="control">
					<button
						className="button is-primary"
						onClick={() => increment(2)}
						>
						Increment +2
					</button>
				</div>

				<div className="control">
					<button
						className="button is-warning"
						onClick={() => setCounter(0)}
						>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
}

export default Counter;
