import { combineReducers } from 'redux';
import counterReducer from '../../features/counter/counterSlice';

const reducers = combineReducers({
    counter: counterReducer
  }
)

export default reducers;
