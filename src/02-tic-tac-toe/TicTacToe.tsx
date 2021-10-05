import { useContext } from 'react';
import Game from './components/Game';
import GameForm from './components/GameForm';
import GameLayout from './components/GameLayout';
import GameContext from './contexts/GameContext';
import './TicTacToe.sass';

const TicTacToe = () =>
{
	const { isStartGame, handleStartGame, gameType } = useContext(GameContext);

	return (
		<GameLayout>
		{
			!isStartGame && <GameForm />
		}

			<button
				onClick={ (e) => handleStartGame(e, !isStartGame) }
				className="button is-primary mb-4"
				>
			{
				!isStartGame
				? 'Start Game!'
				: 'End Game'
			}
			</button>

			<Game type={ gameType } />
		</GameLayout>
	);
};

export default TicTacToe;
