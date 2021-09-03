import { useReducer } from 'react';

const initialState =
{
	counter: 10,
};

type actionType =
	| { type: 'increment', }
	| { type: 'decrement', }
	| { type: 'custom', payload: number, };

const counterReducer = (state: typeof initialState, action: actionType) =>
{
	switch ( action.type )
	{
		case 'increment':
			return {
				...state,
				counter: state.counter + 1,
			};

		case 'decrement':
			return {
				...state,
				counter: state.counter - 1,
			};

		case 'custom':
			return {
				...state,
				counter: action.payload,
			};

		default:
			return state;
	}
};

const CounterReducer = () =>
{
	const [{ counter }, dispatch] = useReducer(counterReducer, initialState);

	return (
		<div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>Counter: useReducer</h2>

			<p className="is-size-4">
				Value: <span className="has-text-primary is-size-3">{ counter }</span>
			</p>

			<div className="field has-addons">
				<div className="control">
					<button
						className="button is-primary"
						onClick={() => dispatch({ type: 'increment' })}
						>
						Increment +1
					</button>
				</div>

				<div className="control">
					<button
						className="button is-primary"
						onClick={() => dispatch({ type: 'decrement' })}
						>
						Decrement -1
					</button>
				</div>

				<div className="control">
					<button
						className="button is-warning"
						onClick={() => dispatch({ type: 'custom', payload: 100 })}
						>
						Reset to 100
					</button>
				</div>
			</div>
		</div>
	);
};

export default CounterReducer;
