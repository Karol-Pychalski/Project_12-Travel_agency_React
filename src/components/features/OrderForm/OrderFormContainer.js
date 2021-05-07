import {connect} from 'react-redux';
import {getOrderOptions} from '../../../redux/orderRedux.js';
import OrderForm from './OrderForm.js';

const mapStateToProps = (state) => ({
  options: getOrderOptions(state),
});

export default connect(mapStateToProps)(OrderForm);