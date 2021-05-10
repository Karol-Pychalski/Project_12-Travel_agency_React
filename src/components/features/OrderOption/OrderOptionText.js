import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';


const OrderOptionText = ({ setOptionValue, currentValue }) => (
  <div className={styles.component}>
    <input
      type={'text'}
      onChange={event => setOptionValue(event.currentTarget.value)}
      value={currentValue}
      className={styles.input}
    />
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};

export default OrderOptionText;