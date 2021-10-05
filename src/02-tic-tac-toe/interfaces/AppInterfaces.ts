import { ChangeEventHandler, MouseEventHandler, ReactNode } from 'react';

export interface OnlyChildrenProps {
	children: ReactNode;
}

export interface GameContextInterface {
	isStartGame:        boolean;
	setIsStartGame:		Function;
	handleStartGame:    Function;
	gameType:           number;
	setGameType:        Function;
	player1:	        string;
	player2:            string;
	handleInputChange:  ChangeEventHandler;
	actualPlayer:       string;
	changeActualPlayer: Function;
	tableDimensions:    dimensions;
	setTableDimensions: Function;
	values:             string[][];
	setValues:          Function;
	position:           PositionInterface;
	setPosition:        Function;
	winner:             WinnerInterface;
	setWinner:          Function;
}

export interface PlayersInterface {
	player1: string,
	player2: string,
}

export interface dimensions {
	xLimit: number,
	yLimit: number,
};

export interface gameItemInterface {
	value:  string;
	row:    number;
	column: number;
	win:    boolean;
}

export interface PositionInterface {
	row: number;
	column: number;
}

export interface WinnerInterface {
	player: number;
	positions: PositionInterface[];
}
