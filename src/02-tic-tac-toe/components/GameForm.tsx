import { MouseEvent, useContext } from 'react';
import GameContext from '../contexts/GameContext';

const GameForm = () =>
{
	const { gameType, setGameType, player1, player2, handleInputChange, setTableDimensions } = useContext(GameContext);

	const handleGameType = (e: MouseEvent<HTMLButtonElement>, type: number = 3):void =>
	{
		e.preventDefault();

		setGameType(type);
		setTableDimensions({
			xLimit: (type - 2) * 3,
			yLimit: (type - 2) * 3,
		});
	};

	return (
		<form className="form mb-4">
			<div className="field is-horizontal">
				<div className="field-label is-normal">
					<label className="label">Game type</label>
				</div>

				<div className="field-body">
					<div className="field has-addons">
						<div className="control">
							<button
								className={`button is-${ gameType === 3 ? 'primary' : 'warning' }`}
								onClick={ (e) => handleGameType(e, 3) }
								>
								3 in a row
							</button>
						</div>
						<div className="control">
							<button
								className={`button is-${ gameType === 4 ? 'primary' : 'warning' }`}
								onClick={ (e) => handleGameType(e, 4) }
								>
								4 in a row
							</button>
						</div>
						<div className="control">
							<button
								className={`button is-${ gameType === 5 ? 'primary' : 'warning' }`}
								onClick={ (e) => handleGameType(e, 5) }
								>
								5 in a row
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="field is-horizontal">
				<div className="field-label is-normal">
					<label className="label">First player</label>
				</div>

				<div className="field-body">
					<div className="field is-expanded">
						<div className="control is-expanded">
							<input
								type="text"
								name="player1"
								value={ player1 }
								placeholder="Insert player's name"
								onChange={ handleInputChange }
								className="input"
								/>
						</div>
					</div>
				</div>
			</div>

			<div className="field is-horizontal">
				<div className="field-label is-normal">
					<label className="label">Second player</label>
				</div>

				<div className="field-body">
					<div className="field is-expanded">
						<div className="control is-expanded">
							<input
								type="text"
								name="player2"
								value={ player2 }
								placeholder="Insert player's name"
								onChange={ handleInputChange }
								className="input"
								/>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};

export default GameForm;
