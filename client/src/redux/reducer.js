import { combineReducers } from 'redux';
import authreducer from './slice/authslice';

const rootReducer = combineReducers({
   auth:authreducer
});

export default rootReducer