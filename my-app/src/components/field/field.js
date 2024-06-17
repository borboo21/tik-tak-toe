import styles from './field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, setFieldValue, isGameEnded, isDraw }) => {
	return (
		<div className={styles.field}>
			{field.map((btn, index) => {
				return (
					<>
						<button
							key={index}
							className={styles.btn}
							style={{ color: btn ? 'black' : 'lightcyan' }}
							disabled={isGameEnded || isDraw}
							onClick={() => {
								setFieldValue(index);
							}}
						>
							{btn || '-'}
						</button>
						{(index === 2 || index === 5) && <br />}
					</>
				);
			})}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	setFieldValue: PropTypes.array,
	isGameEnded: PropTypes.func,
	isDraw: PropTypes.func,
};

export const Field = ({ field, setFieldValue, isDraw, isGameEnded }) => {
	return (
		<FieldLayout
			field={field}
			setFieldValue={setFieldValue}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
		/>
	);
};

Field.propTypes = {
	field: PropTypes.array,
	setFieldValue: PropTypes.array,
	isGameEnded: PropTypes.func,
	isDraw: PropTypes.func,
};
