import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionDate = ({setOptionValue}) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={styles.component}>
      <DatePicker selected={startDate} onChange={date => (setStartDate(date), setOptionValue(date))}/>
    </div>
  );
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;