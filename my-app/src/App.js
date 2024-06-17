import './index.css';
import { useState } from 'react';
import styles from './App.module.css';
import { Information, Field } from './components';
import PropTypes from 'prop-types';

export const AppLayout = ({
	currentPlayer,
	isGameEnded,
	isDraw,
	field,
	setField,
	setFieldValue,
	isWinOrDraw,
	checkWinner,
	retry,
}) => (
	<div className={styles.App}>
		{isWinOrDraw()}
		<Information
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			checkWinner={checkWinner}
		/>
		<Field
			field={field}
			setField={setField}
			setFieldValue={setFieldValue}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
		/>
		{isGameEnded || isDraw ? (
			<div className={styles.retryArea}>
				<button className={styles.retryBtn} onClick={() => retry()}>
					Попробовать снова
				</button>
			</div>
		) : (
			''
		)}
	</div>
);

AppLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	field: PropTypes.array,
	setField: PropTypes.array,
	setFieldValue: PropTypes.array,
	checkWinner: PropTypes.func,
	isWinOrDraw: PropTypes.func,
	nextPlayer: PropTypes.func,
	retry: PropTypes.func,
};

export const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const retry = () => {
		setCurrentPlayer('X');
		setField(['', '', '', '', '', '', '', '', '']);
		setIsDraw(false);
		setIsGameEnded(false);
	};

	const setFieldValue = (i) => {
		if (field[i]) return;
		if (isGameEnded || isDraw) return;
		let newValue = field.slice();
		newValue[i] = currentPlayer;
		setField(newValue);
		nextPlayer();
	};

	const nextPlayer = () => {
		return setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
	};

	const isWinOrDraw = () => {
		if (checkWinner()) {
			return setIsGameEnded(true);
		} else if (checkDraw()) {
			return setIsDraw(true);
		}
	};

	const checkWinner = () => {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let combination of WIN_PATTERNS) {
			let [a, b, c] = combination;
			if (field[a] && field[a] === field[b] && field[b] === field[c]) {
				return field[a];
			}
		}
		return null;
	};

	const checkDraw = () => {
		return !field.includes('');
	};

	return (
		<AppLayout
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			field={field}
			setField={setField}
			setFieldValue={setFieldValue}
			checkWinner={checkWinner}
			isWinOrDraw={isWinOrDraw}
			nextPlayer={nextPlayer}
			retry={retry}
		/>
	);
};

App.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.bool,
	field: PropTypes.array,
	setField: PropTypes.array,
	setFieldValue: PropTypes.func,
	checkWinner: PropTypes.func,
	isWinOrDraw: PropTypes.func,
	nextPlayer: PropTypes.func,
	retry: PropTypes.func,
};
