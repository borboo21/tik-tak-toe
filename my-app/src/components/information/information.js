import styles from './information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({
	currentPlayer,
	isGameEnded,
	isDraw,
	checkWinner,
}) => {
	return (
		<div>
			{isDraw ? (
				<p className={styles.player}>Ничья</p>
			) : isGameEnded ? (
				<p className={styles.player}>Победа: {checkWinner()}</p>
			) : (
				<p className={styles.player}>Ходит:{currentPlayer}</p>
			)}
		</div>
	);
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.func,
	isDraw: PropTypes.func,
	checkWinner: PropTypes.func,
};

export const Information = ({ currentPlayer, isGameEnded, isDraw, checkWinner }) => {
	return (
		<InformationLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			checkWinner={checkWinner}
		/>
	);
};

Information.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.func,
	isDraw: PropTypes.func,
	checkWinner: PropTypes.func,
};
