import { ChangeEvent, createContext, MouseEvent, useState } from 'react';
import {
	dimensions,
	GameContextInterface,
	OnlyChildrenProps,
	PlayersInterface,
	PositionInterface,
	WinnerInterface,
} from '../interfaces/AppInterfaces';

const initialPlayers: PlayersInterface = {
	player1: 'Player 1',
	player2: 'Player 2',
};

const defaultDimensions: dimensions = {
	xLimit: 3,
	yLimit: 3,
};

let initialValues: string[][] = [];

for (let i = 0; i < 3; i++)
{
	initialValues[i] = [];

	for (let j = 0; j < 3; j++)
	{
		initialValues[i].push('');
	}
}

const initialWinner: WinnerInterface = {
	player:	0,
	positions: [],
};

const GameContext = createContext<GameContextInterface>({} as GameContextInterface);

const GameProvider = ({ children }: OnlyChildrenProps) =>
{
	const [gameType, setGameType] = useState<number>(3);
	const [isStartGame, setIsStartGame] = useState<boolean>(false);
	const [{ player1, player2 }, setPlayers] = useState<PlayersInterface>(initialPlayers);
	const [actualPlayer, setActualPlayer] = useState<string>('player1');
	const [tableDimensions, setTableDimensions] = useState<dimensions>(defaultDimensions);
	const [values, setValues] = useState<string	[][]>(initialValues);
	const [position, setPosition] = useState<PositionInterface>({ row: -1, column: -1 } as PositionInterface);
	const [winner, setWinner] = useState<WinnerInterface>(initialWinner);

	const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>):void =>
	{
		setPlayers((players) => {
			return {...players, [target.name]: target.value};
		});
	};

	const handleStartGame = (e: MouseEvent<HTMLButtonElement>, reset: boolean):void =>
	{
		e.preventDefault();
		setIsStartGame(!isStartGame);
		setActualPlayer('player1');

		if (reset)
		{
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

			setWinner(initialWinner);
		}
	};

	const changeActualPlayer = ():void =>
	{
		setActualPlayer(player => player === 'player1' ? 'player2' : 'player1');
	};

	const data = {
		gameType,
		setGameType,
		isStartGame,
		setIsStartGame,
		handleStartGame,
		player1,
		player2,
		handleInputChange,
		actualPlayer,
		changeActualPlayer,
		tableDimensions,
		setTableDimensions,
		values,
		setValues,
		position,
		setPosition,
		winner,
		setWinner,
	};

	return (
		<GameContext.Provider value={ data }>
			{ children }
		</GameContext.Provider>
	);
};

export { GameProvider };
export default GameContext;
