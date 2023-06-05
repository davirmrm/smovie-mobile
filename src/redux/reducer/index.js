import { combineReducers } from 'redux';
import homeState from '../../views/HomeScreen/redux/homeReducer';

const allReducers = combineReducers({
  homeState,
});

const rootReducer = (state, action) => {
  return allReducers(state, action);
};

export default rootReducer;
