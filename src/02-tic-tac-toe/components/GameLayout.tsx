import { OnlyChildrenProps } from '../interfaces/AppInterfaces';

const GameLayout = ({ children }: OnlyChildrenProps) =>
{
	return (
		<div className="tictactoe content is-flex is-flex-direction-column is-align-items-center is-justify-content-center has-background-light min-height-full p-4">
			<h1 className="has-text-primary">Tic Tac Toe</h1>
			<hr className="hr-full has-background-warning"/>

			{ children }
		</div>
	);
};

export default GameLayout;
