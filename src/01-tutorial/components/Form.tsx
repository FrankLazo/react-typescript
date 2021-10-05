import useForm from '../hooks/useForm';

interface FormData {
	mail: string,
	name: string,
	age:  number,
}

const Form = () =>
{
	const { mail, name, age, form, handleChange } = useForm<FormData>({
		mail: 'mail@example.com',
		name: 'Full Name',
		age:  35,
	});

	return (
		<div className="columns block is-flex is-flex-direction-column is-align-items-center">
			<h2>Form: custom hooks</h2>

			<form autoComplete="off" className="column is-full">
				<div className="field">
					<label
						htmlFor="mail"
						className="label"
						>
						Email:
					</label>
					<div className="control">
						<input
							type="email"
							name="mail"
							className="input"
							id="mail"
							value={ mail }
							onChange={handleChange}
							/>
					</div>
				</div>

				<div className="field">
					<label
						htmlFor="name"
						className="label"
						>
						Name:
					</label>
					<div className="control">
						<input
							type="text"
							name="name"
							className="input"
							id="name"
							value={ name }
							onChange={handleChange}
							/>
					</div>
				</div>

				<div className="field">
					<label
						htmlFor="age"
						className="label"
						>
						Age:
					</label>
					<div className="control">
						<input
							type="number"
							name="age"
							className="input"
							id="age"
							value={ age }
							onChange={handleChange}
							/>
					</div>
				</div>
			</form>

			<pre>{ JSON.stringify(form, null, 2) }</pre>
		</div>
	);
};

export default Form;
