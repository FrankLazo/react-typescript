import { useContext } from 'react';
import GameContext from '../contexts/GameContext';
import { gameItemInterface } from '../interfaces/AppInterfaces';

const GameItem = ({ value, row, column, win }: gameItemInterface) =>
{
	const { isStartGame, gameType, actualPlayer, changeActualPlayer,
		values, setValues, setPosition, winner } = useContext(GameContext);

	const handleClick = () =>
	{
		if (isStartGame && values[row][column] === '')
		{
			const symbol: string = actualPlayer === 'player1' ? 'X' : 'O';
			changeActualPlayer();

			const newValues: string[][] = values.map((rowValue, rindex) => (
				rindex !== row
				? rowValue
				: rowValue.map((cell, index) => (
					index !== column
					? cell
					: symbol
				))
			));

			setValues(newValues);
			setPosition({ row, column });
		}
	};

	return (
		<div
			className={`gameitem gameitem-size-${ gameType } is-flex is-justify-content-center is-align-items-center ${ win && `has-background-${ winner.player === 1 ? 'primary' : 'warning' }` }`}
			onClick={ handleClick }
			>
			<p className={`is-size-3 has-text-weight-bold has-text-${ win ? 'success' : `${ value === 'X' ? 'primary' : 'warning' }` }`}>
				{ value }
			</p>
		</div>
	);
};

export default GameItem;
