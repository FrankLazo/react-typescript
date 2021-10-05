import { GameProvider } from './02-tic-tac-toe/contexts/GameContext';
import TicTacToe from './02-tic-tac-toe/TicTacToe';
// import Tutorial from './01-tutorial/Tutorial';

const App = () =>
{
	return (
		// <Tutorial />
		<GameProvider>
			<TicTacToe />
		</GameProvider>
	);
};

export default App;
