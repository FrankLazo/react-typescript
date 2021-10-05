import { useContext, useEffect } from 'react';
import { GameArgs } from '../types/AppTypes';
import GameContext from '../contexts/GameContext';
import GameItem from './GameItem';
import './Game.sass';
import { PositionInterface, WinnerInterface } from '../interfaces/AppInterfaces';

const Game = ({ type }: GameArgs) =>
{
	const {
		isStartGame,
		setIsStartGame,
		player1,
		player2,
		actualPlayer,
		values,
		tableDimensions,
		setValues,
		position,
		setPosition,
		winner,
		setWinner,
	} = useContext(GameContext);

	// Poner a cero el tablero

	useEffect(() => {
		const { xLimit, yLimit } = tableDimensions;
		let newValues: string[][] = [];

		for (let i = 0; i < xLimit; i++)
		{
			newValues[i] = [];

			for (let j = 0; j < yLimit; j++)
			{
				newValues[i].push('');
			}
		}

		setValues(newValues);

		const initialWinner: WinnerInterface = {
			player:	0,
			positions: [],
		};

		setWinner(initialWinner);
	}, [tableDimensions, setValues, setWinner]);

	// Actualizar los valores del tablero y verificar si se ha producido la jugada ganadora

	useEffect(() => {
		if (isStartGame && position.row >= 0)
		{
			const { row, column } = position;	// Posición de la última jugada
			const value = values[row][column];	// Valor de la última jugada

			let numberInARow: number = 1;		// Número de símbolos en fila
			let rowPos: number = row;
			let colPos: number = column;
			let finish: boolean = false;
			let winnerPositions: PositionInterface[] = [];

			// Comparación por columna hacia arriba

			rowPos--;
			winnerPositions.push({
				row,
				column,
			});

			while (!finish && rowPos >= 0 && values[rowPos][colPos] === value)
			{
				numberInARow++;
				winnerPositions.push({
					row: rowPos,
					column: colPos,
				});
				if (numberInARow === type) finish = true;
				rowPos--;
			}

			// Comparación por columna hacia abajo

			rowPos = row;
			rowPos++;

			while (!finish && rowPos < tableDimensions.yLimit && values[rowPos][colPos] === value)
			{
				numberInARow++;
				winnerPositions.push({
					row: rowPos,
					column: colPos,
				});
				if (numberInARow === type) finish = true;
				rowPos++;
			}

			// Comparación por fila hacia izquierda

			numberInARow = 1;
			rowPos = row;
			colPos--;

			if (!finish)
			{
				winnerPositions = [];
				winnerPositions.push({
					row,
					column,
				});
			}

			while (!finish && colPos >= 0 && values[rowPos][colPos] === value)
			{
				numberInARow++;
				winnerPositions.push({
					row: rowPos,
					column: colPos,
				});
				if (numberInARow === type) finish = true;
				colPos--;
			}

			// Comparación por fila hacia derecha

			colPos = column;
			colPos++;

			while (!finish && colPos < tableDimensions.xLimit && values[rowPos][colPos] === value)
			{
				numberInARow++;
				winnerPositions.push({
					row: rowPos,
					column: colPos,
				});
				if (numberInARow === type) finish = true;
				colPos++;
			}

			// Comparación por diagonal hacia arriba-izquierda

			numberInARow = 1;
			colPos = column;
			rowPos--;
			colPos--;

			if (!finish)
			{
				winnerPositions = [];
				winnerPositions.push({
					row,
					column,
				});
			}

			while (!finish && colPos >= 0 && rowPos >= 0 && values[rowPos][colPos] === value)
			{
				numberInARow++;
				winnerPositions.push({
					row: rowPos,
					column: colPos,
				});
				if (numberInARow === type) finish = true;
				rowPos--;
				colPos--;
			}

			// Comparación por diagonal hacia abajo-derecha

			rowPos = row;
			colPos = column;
			rowPos++;
			colPos++;

			while (!finish && colPos < tableDimensions.xLimit && rowPos < tableDimensions.yLimit && values[rowPos][colPos] === value)
			{
				numberInARow++;
				winnerPositions.push({
					row: rowPos,
					column: colPos,
				});
				if (numberInARow === type) finish = true;
				rowPos++;
				colPos++;
			}

			// Comparación por diagonal hacia arriba-derecha

			numberInARow = 1;
			rowPos = row;
			colPos = column;
			rowPos--;
			colPos++;

			if (!finish)
			{
				winnerPositions = [];
				winnerPositions.push({
					row,
					column,
				});
			}

			while (!finish && colPos < tableDimensions.xLimit && rowPos >= 0 && values[rowPos][colPos] === value)
			{
				numberInARow++;
				winnerPositions.push({
					row: rowPos,
					column: colPos,
				});
				if (numberInARow === type) finish = true;
				rowPos--;
				colPos++;
			}

			// Comparación por diagonal hacia abajo-izquierda

			rowPos = row;
			colPos = column;
			rowPos++;
			colPos--;

			while (!finish && colPos >= 0 && rowPos < tableDimensions.yLimit && values[rowPos][colPos] === value)
			{
				numberInARow++;
				winnerPositions.push({
					row: rowPos,
					column: colPos,
				});
				if (numberInARow === type) finish = true;
				rowPos++;
				colPos--;
			}

			if (finish)
			{
				const newWinner: WinnerInterface = {
					player: actualPlayer === 'player1' ? 2 : 1,
					positions: winnerPositions,
				};

				setIsStartGame(false);
				setWinner(newWinner);
			}
		}
	}, [values, position, tableDimensions, type, setIsStartGame, isStartGame, actualPlayer, setWinner]);

	useEffect(() => {
		setPosition({ row: -1, column: -1 });
	}, [isStartGame, setPosition]);

	return (
		<div className="tabletop is-flex is-flex-direction-column is-align-items-center p-5">
			<h2 className="has-text-light has-text-weight-normal">{ type } in a row</h2>

		{
			isStartGame && (
				<p className="width-full has-background-success has-text-centered py-3 mb-5">
					Turn:&nbsp;
					<span
						className={`is-uppercase has-text-weight-bold has-text-${actualPlayer === 'player1' ? 'primary' : 'warning'}`}
						>{actualPlayer === 'player1' ? player1 : player2}</span>
				</p>
			)
		}

		{
			winner.player !== 0 && (
				<p className="width-full has-background-success has-text-centered py-3 mb-5">
					Winner:&nbsp;
					<span
						className={`is-uppercase has-text-weight-bold has-text-${winner.player === 1 ? 'primary' : 'warning'}`}
						>{winner.player === 1 ? player1 : player2}!!!</span>
				</p>
			)
		}

			<div className="gamearea">
			{
				values.map((row, rowindex) => {
					return (
						<div className="gameitemrow is-flex" key={`${ rowindex }`}>
						{
							row.map((col, colindex) => {
								let winCell = false;

								winner.positions.forEach( position => {
									if (position.row === rowindex && position.column === colindex)
									{
										winCell = true;
									}
								});

								return (
									<GameItem
										key={ `${rowindex}-${colindex}` }
										value={ col }
										row={ rowindex }
										column={ colindex }
										win={ winCell }
										/>
								)
							})
						}
						</div>
					)
				})
			}
			</div>
		</div>
	);
};

export default Game;
