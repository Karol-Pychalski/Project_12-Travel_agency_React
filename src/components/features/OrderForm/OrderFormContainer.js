import {connect} from 'react-redux';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux.js';
import OrderForm from './OrderForm.js';

const mapStateToProps = (state) => ({
  options: getOrderOptions(state),
});

//z zad. 14.3: mapowanie dispatchera
const mapDispatchProps = (dispatch) => ({
  setOrderOption: payload => dispatch(setOrderOption(payload)),
});

export default connect(mapStateToProps, mapDispatchProps)(OrderForm);

