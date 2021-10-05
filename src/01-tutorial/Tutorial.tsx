import Counter from "./components/Counter";
import CounterReducer from "./components/CounterReducer";
import Form from "./components/Form";
import ParentTimer from "./components/ParentTimer";
import User from "./components/User";

function Tutorial() {
	return (
		<div className="App container content is-flex is-flex-direction-column is-align-items-center mt-4 mb-4">
			<h1 className="has-text-primary">React + TypeScript</h1>

			<Counter />
			<User />
			<ParentTimer />
			<CounterReducer />
			<Form />
		</div>
	);
}

export default Tutorial;
